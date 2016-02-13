var _ = require('lodash')
var pngparse = require('pngparse')
var graphlib = require('graphlib')
var Graph = graphlib.Graph
var crypto = require('crypto')

function genNodeId () {
  return crypto.randomBytes(4).toString('hex')
}

function decodePixel (p) {
  return {
    a: (p >>> 0) % 256,
    b: (p >>> 8) % 256,
    g: (p >>> 16) % 256,
    r: (p >>> 24) % 256
  }
}

function isBlank (p) {
  var px = decodePixel(p)
  return px.a < 255
}

function isPath (p) {
  var px = decodePixel(p)
  return px.r === 255 &&
         px.g === 0 &&
         px.b === 0
}

function isTurret (p) {
  var px = decodePixel(p)
  return px.r === 194 &&
         px.g === 0 &&
         px.b === 254
}

function isNode (p) {
  var px = decodePixel(p)
  return px.r === 0 &&
         px.g === 0 &&
         px.b === 0 &&
         px.a === 255
}

function isTeamBlue (p) {
  var px = decodePixel(p)
  return px.r === 0 &&
         px.g === 0 &&
         px.b === 255
}

function isTeamYellow (p) {
  var px = decodePixel(p)
  return px.r === 255 &&
         px.g === 255 &&
         px.b === 0
}

function isWall (p) {
  var px = decodePixel(p)
  return px.r === 0 &&
         px.g === 255 &&
         px.b === 0
}

function isBuilding (p) {
  var px = decodePixel(p)
  return px.r === 99 &&
         px.g === 99 &&
         px.b === 99
}

function parseImage (imageData) {
  var pixels = []
  _.times(imageData.width, function () {
    pixels.push([])
  })

  for (let x = 0; x < imageData.width; x++) {
    for (let y = 0; y < imageData.height; y++) {
      var p = imageData.getPixel(x, y)

      var blnk = isBlank(p)
      var path = isPath(p)
      var trrt = isTurret(p)
      var wall = isWall(p)
      var bldg = isBuilding(p)
      var tmbl = isTeamBlue(p)
      var tmyl = isTeamYellow(p)
      var node = isNode(p) || wall || bldg || tmbl || tmyl

      var mdata = {}
      pixels[x][y] = mdata
      if (blnk) {
        mdata.type = 'blank'
      } else if (path) {
        mdata.type = 'path'
      } else if (trrt) {
        mdata.type = 'turret'
      } else if (node) {
        mdata.type = 'node'
        if (wall) {
          mdata.nType = 'wall'
        } else if (bldg) {
          mdata.nType = 'tower'
          mdata.team = 'neutral'
        } else if (tmbl) {
          mdata.nType = 'tower'
          mdata.team = 'blue'
        } else if (tmyl) {
          mdata.nType = 'tower'
          mdata.team = 'yellow'
        } else {
          mdata.nType = 'junction'
        }
      }

      if (!mdata.type) {
        throw new Error(
          'Unknown pixel value ' + JSON.stringify(decodePixel(p)) +
          ' at ' + JSON.stringify({x: x, y: y}))
      }
    }
  }

  return pixels
}

module.exports = function (pngPath, cb) {
  pngparse.parseFile(pngPath, function (err, data) {
    if (err) {
      cb(err)
      return
    }

    var width = data.width
    var height = data.height
    var graph = new Graph({directed: true})
    var pdata = parseImage(data)

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let cp = pdata[x][y]
        if (cp.type === 'node' && !cp.nodeId) {
          cp.nodeId = genNodeId()
          cp.pixels = []
          graph.setNode(cp.nodeId, cp)
          visitNodes(x, y, cp)
        }
      }
    }

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let cp = pdata[x][y]
        if (cp.type === 'node') {
          visitArcs(x, y, null)
        }
      }
    }

    graph.nodes().forEach(function (node) {
      var cp = graph.node(node)
      var x = 0
      var y = 0
      cp.pixels.forEach(function (px) {
        x += px.x
        y += px.y
      })
      x /= cp.pixels.length
      y /= cp.pixels.length
      x = Math.floor(x)
      y = Math.floor(y)
      cp.coords = {x: x, y: y}
      delete cp.pixels
      delete cp.visited
    })

    if (typeof cb === 'function') {
      cb(null, graph)
    }

    function visitNodes (x, y, previous) {
      if (!(0 <= x && x < width &&
            0 <= y && y < height)) {
        return
      }

      var cp = pdata[x][y]

      if (cp.type !== 'node' || cp.visited) {
        return
      }
      cp.visited = true

      cp.nodeId = previous.nodeId
      graph.node(cp.nodeId).pixels.push({x: x, y: y})

      for (let dx = -1; dx <= 1; dx += 1) {
        for (let dy = -1; dy <= 1; dy += 1) {
          visitNodes(x + dx, y + dy, cp)
        }
      }
    }

    function visitArcs (x, y, previous) {
      if (!(0 <= x && x < width &&
            0 <= y && y < height)) {
        return
      }

      var cp = pdata[x][y]

      if (cp.type === 'path' && cp.visited) {
        return
      }
      cp.visited = true

      if (previous === null) {
        for (let dx = -1; dx <= 1; dx += 1) {
          for (let dy = -1; dy <= 1; dy += 1) {
            visitArcs(x + dx, y + dy, cp)
          }
        }
      }

      if (previous !== null && cp.type === 'node') {
        if (previous.nodeId !== cp.nodeId) {
          graph.setEdge(previous.nodeId, cp.nodeId)
          graph.setEdge(cp.nodeId, previous.nodeId)
        }
      }

      if (previous !== null && cp.type === 'path') {
        for (let dx = -1; dx <= 1; dx += 1) {
          for (let dy = -1; dy <= 1; dy += 1) {
            visitArcs(x + dx, y + dy, previous)
          }
        }
      }
    }
  })
}

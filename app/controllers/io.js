var graphparser = require('../utils/graphparser')
var crypto = require('crypto')

var createId = function () {
  crypto.randomBytes(8).toString('hex')
}

function random (low, high) {
  return Math.random() * (high - low) + low
}

function createUnit (graph, spawner) {
  return {
    type: 'unit',
    position: {
      x: 0,
      y: 0
    },
    direction: {
      x: 0,
      y: 0
    },
    nodes: {
      startid: spawner.nodeId,
      destid: graph.outEdges(spawner.nodeId)[0].w,
      progress: 0.0
    }
  }
}

function createGameState () {
  return {
    units: []
  }
}

module.exports = function (io) {
  graphparser('HexMap2.png', function (err, graph) {
    if (err) {
      throw err
    }

    var sockets = []
    var gameState = createGameState()

    var gameloopIntVal = null
    var counter = 0
    function gameloop () {
      if (counter === 60) {
        gameState.units.push(createUnit(graph, graph.node(graph.nodes()[0])))
        counter = 0
      }
      ++counter

      gameState.units.forEach(function (unit) {
        if (unit.nodes.progress < 1.0) {
          unit.nodes.progress += 0.01
        }
        var startNode = graph.node(unit.nodes.startid)
        var endNode = graph.node(unit.nodes.destid)
        unit.direction.x =
          (endNode.coords.x - startNode.coords.x)
        unit.direction.y =
          (endNode.coords.y - startNode.coords.y)

        unit.position.x =
          startNode.coords.x + unit.direction.x * unit.nodes.progress
        unit.position.y =
          startNode.coords.y + unit.direction.y * unit.nodes.progress
      })

      io.emit('update', gameState)
    }

    setInterval(gameloop, 1000 / 30)

    io.on('connection', function (socket) {
      sockets.push(socket)

      // if (gameState.players.size === 2) {
      //   gameloopIntVal = setTimeout(gameloop, 1000 / 30)
      // }

      socket.on('disconnect', function () {
        sockets.forEach(function (player) {
          player.close()
        })
        sockets = []
        clearInterval(gameloopIntVal)
      })
    })
  })
}

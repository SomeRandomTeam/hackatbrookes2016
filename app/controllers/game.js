var _ = require('lodash')

var Vector = require('./gamecomp/vector')

var Game = module.exports = function Game (graph) {
  this.graph = graph
  this.graph.nodes().forEach(function (nodeId) {
    var node = graph.node(nodeId)
    node.coords = Vector.fromObj(node.coords)
    if (node.nType === 'base') {
      if (node.team === 'blue') {
        node.loyalty = -100
      } else if (node.team === 'neutral') {
        node.loyalty = 0
      } else if (node.team === 'yellow') {
        node.loyalty = 100
      }
    }
  })
  this.units = []
  this.deaths = []
}

Game.prototype.update = function (delta) {
  this.units.forEach((unit) => {
    var shouldMove = true
    shouldMove = shouldMove && !this.attack(delta, unit)
    shouldMove = shouldMove && !this.conquer(delta, unit)
    if (shouldMove) {
      unit.update(delta)
    }
    var startCoord = unit.sourceNode.coords
    var endCoord = unit.targetNode.coords
    var unitCoord = unit.position
    if (unitCoord.subtract(startCoord).length() > endCoord.subtract(startCoord).length()) {
      unit.sourceNode = unit.targetNode
      var edges = this.graph.outEdges(unit.sourceNode.nodeId)
      var targetnodeId = edges[_.random(edges.length - 1)].w
      var targetnode = this.graph.node(targetnodeId)
      unit.setTarget(targetnode)
    }
  })

  var untTypes = ['tank', 'rocket', 'chopper', 'bomb']
  this.graph.nodes().forEach((nodeId) => {
    var node = this.graph.node(nodeId)
    if (node.nType === 'base' && node.team !== 'neutral') {
      if (!node.buildTime || !node.unitType) {
        node.unitType = untTypes[_.random(untTypes.length - 1)]
        node.buildTime = require('./gamecomp/' + node.unitType).buildTime
      }
      node.buildTime -= delta
    }
    if (node.buildTime <= 0) {
      var unit = require('./gamecomp/' + node.unitType).create(node.team, node.coords)
      this.units.push(unit)
      var edges = this.graph.outEdges(node.nodeId)
      var targetnodeId = edges[_.random(edges.length - 1)].w
      var targetnode = this.graph.node(targetnodeId)
      unit.sourceNode = node
      unit.setTarget(targetnode)
      node.buildTime = unit.buildTime
    }
  })
}

Game.prototype.attack = function (delta, unit) {
  var attacked = false
  this.units.forEach(function (ptarg) {
    if (unit.team !== ptarg.team) {
      if (unit.position.subtract(ptarg.position).length() <= unit.range) {
        ptarg.hp -= unit.damage * delta
        attacked = true
      }
    }
  })

  for (let i = this.units.length - 1; i >= 0; i--) {
    if (this.units[i].hp <= 0) {
      this.deaths.push(this.units[i].id)
      this.units.splice(i, 1)
    }
  }

  return attacked
}

Game.prototype.toJSON = function () {
  return {
    nodes: this.graph.nodes().map((nodeId) => {
      var node = this.graph.node(nodeId)
      return {
        id: node.nodeId,
        team: node.team,
        loyalty: node.loyalty,
        type: node.nType,
        unitType: node.unitType,
        position: {
          x: node.coords.x,
          y: node.coords.y
        },
        direction: {
          x: 0,
          y: 0
        }
      }
    }),
    units: this.units.map((unit) => {
      return unit.toJSON()
    }),
    deaths: this.deaths
  }
}

Game.prototype.clearDead = function () {
  this.deaths = []
}

Game.prototype.conquer = function (delta, unit) {
  var conquest = false
  this.graph.nodes().forEach((nodeId) => {
    var node = this.graph.node(nodeId)
    if (node.nType !== 'base') {
      return
    }
    if (unit.team === node.team) {
      return
    }
    if (unit.position.subtract(node.coords).length() <= 30) {
      conquest = true
      if (unit.team === 'blue') {
        node.loyalty -= 2 * delta
      }
      if (unit.team === 'yellow') {
        node.loyalty += 2 * delta
      }
      if (node.loyalty <= -100) {
        node.team = 'blue'
        node.loyalty = -100
      }
      if (node.loyalty >= 100) {
        node.team = 'yellow'
        node.loyalty = 100
      }
    }
  })
  return conquest
}

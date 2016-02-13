var _ = require('lodash')

var Vector = require('./gamecomp/vector')
var Tank = require('./gamecomp/tank')

var Game = module.exports = function Game (graph) {
  this.graph = graph
  this.units = []
}

Game.prototype.update = function (delta) {
  this.units.forEach(function (unit) {
    unit.update(delta)
  })

  this.graph.nodes().forEach((nodeId) => {
    var node = this.graph.node(nodeId)
    if (node.nType === 'building' && node.team !== 'neutral') {
      if (!node.buildTime) {
        node.buildTime = 10
      }
      node.buildTime -= delta
    }
    if (node.buildTime <= 0) {
      var unit = Tank.create(node.team, node.coords)
      this.units.push(unit)
      var edges = this.graph.outEdges(node.nodeId)
      var targetnodeId = edges[_.random(edges.length - 1)].w
      var targetnode = this.graph.node(targetnodeId)
      unit.setTarget(targetnode)
      node.buildTime = unit.buildTime
    }
  })
}

Game.prototype.toJSON = function () {
  return {
    nodes: this.graph.nodes().map((nodeId) => {
      var node = this.graph.node(nodeId)
      return {
        id: node.nodeId,
        team: node.team,
        type: node.nType,
        unitType: node.unitType,
        position: {
          x: node.coords.x,
          y: node.coords.y
        }
      }
    }),
    units: this.units.map((unit) => {
      return unit.toJSON()
    })
  }
}

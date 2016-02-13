var Vector = require('./vector')

var Unit = require('./unit')

var Builder = module.exports = Object.create(Unit)

Builder.create = function (team, v) {
  return Object.create(Builder).init(team, v)
}

Builder.init = function (team, v) {
  Unit.init.call(this, team, v)
  return this
}

Builder.toJSON = function () {
  return {
    id: this.id,
    type: this.type,
    team: this.team,
    position: {
      x: this.position.x,
      y: this.position.y
    },
    direction: {
      x: this.direction.x,
      y: this.direction.y
    },
    hp: this.hp,
    maxHP: this.maxHP
  }
}

Builder.type = 'engineer'
Builder.hp = 3
Builder.maxHP = 3
Builder.damage = 0
Builder.speed = 20
Builder.range = 0
Builder.buildTime = 5

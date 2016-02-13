var Vector = require('./vector')

var Unit = require('./unit')

var Chopper = module.exports = Object.create(Unit)

Chopper.create = function (team, v) {
  return Object.create(Chopper).init(team, v)
}

Chopper.init = function (team, v) {
  Unit.init.call(this, team, v)
  return this
}

Chopper.toJSON = function () {
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

Chopper.type = 'chopper'
Chopper.hp = 5
Chopper.maxHP = 5
Chopper.damage = 2
Chopper.speed = 20
Chopper.range = 0
Chopper.buildTime = 8

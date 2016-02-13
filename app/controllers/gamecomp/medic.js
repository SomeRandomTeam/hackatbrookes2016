var Vector = require('./vector')

var Unit = require('./unit')

var Medic = module.exports = Object.create(Unit)

Medic.create = function (team, v) {
  return Object.create(Medic).init(team, v)
}

Medic.init = function (team, v) {
  Unit.init.call(this, team, v)
  return this
}

Medic.toJSON = function () {
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

Medic.type = 'medic'
Medic.hp = 4
Medic.maxHP = 4
Medic.damage = 0
Medic.speed = 30
Medic.range = 10
Medic.buildTime = 7

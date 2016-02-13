var Vector = require('./vector')

var Unit = require('./unit')

var Rocket = module.exports = Object.create(Unit)

Rocket.create = function (team, v) {
  return Object.create(Rocket).init(team, v)
}

Rocket.init = function (team, v) {
  Unit.init.call(this, team, v)
  return this
}

Rocket.toJSON = function () {
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

Rocket.type = 'rocket'
Rocket.hp = 2
Rocket.maxHP = 2
Rocket.damage = 7
Rocket.speed = 10
Rocket.range = 20
Rocket.buildTime = 6

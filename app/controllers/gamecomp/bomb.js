var Vector = require('./vector')

var Unit = require('./unit')

var Bomb = module.exports = Object.create(Unit)

Bomb.create = function (team, v) {
  return Object.create(Bomb).init(team, v)
}

Bomb.init = function (team, v) {
  Unit.init.call(this, team, v)
  return this
}

Bomb.toJSON = function () {
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

Bomb.type = 'bomb'
Bomb.hp = 2
Bomb.maxHP = 2
Bomb.damage = 15
Bomb.speed = 30
Bomb.range = 10
Bomb.buildTime = 15

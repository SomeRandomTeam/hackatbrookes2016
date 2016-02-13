var Vector = require('./vector')

var Unit = require('./unit')

var Tank = module.exports = Object.create(Unit)

Tank.create = function (team, v) {
  return Object.create(Tank).init(team, v)
}

Tank.init = function (team, v) {
  Unit.init.call(this, team, v)
  return this
}

Tank.toJSON = function () {
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

Tank.type = 'tank'
Tank.hp = 10
Tank.maxHP = 10
Tank.damage = 5
Tank.speed = 10
Tank.range = 50
Tank.buildTime = 10

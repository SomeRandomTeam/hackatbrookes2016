var crypto = require('crypto')

var Vector = require('./vector')

var createId = function () {
  return crypto.randomBytes(8).toString('hex')
}

var Unit = module.exports = Object.create({})

Unit.init = function (team) {
  this.id = createId()
  this.team = team
  this.position = Vector.create(0, 0)
  this.direction = Vector.create(0, 0)
  return this
}

Unit.update = function (delta) {
  this.position = this.position.add(
      this.direction.multiply(this.speed * delta)
    )
}

Unit.setTarget = function (target) {
  this.targetNode = target
  console.log(target)
  this.direction = Vector.fromObj(target.coords).subtract(this.position).normal()
}


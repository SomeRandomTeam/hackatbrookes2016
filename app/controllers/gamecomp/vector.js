var Vector = module.exports = Object.create({})

Vector.create = function (x, y) {
  return Object.create(Vector).init(x, y)
}

Vector.fromObj = function (obj) {
  return Vector.create(obj.x, obj.y)
}

Vector.init = function (x, y) {
  this.x = x
  this.y = y
  return this
}

Vector.add = function (v) {
  return Object.create(Vector).init(this.x + v.x, this.y + v.y)
}

Vector.subtract = function (v) {
  return Object.create(Vector).init(this.x - v.x, this.y - v.y)
}

Vector.multiply = function (l) {
  return Vector.create(this.x * l, this.y * l)
}

Vector.length = function () {
  return Math.sqrt(this.x * this.x + this.y * this.y)
}

Vector.normal = function () {
  return this.multiply(1 / this.length())
}

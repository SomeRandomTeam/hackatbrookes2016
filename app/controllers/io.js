var graphparser = require('../utils/graphparser')
var crypto = require('crypto')
var Game = require('./game')

var createId = function () {
  crypto.randomBytes(8).toString('hex')
}

module.exports = function (io) {
  graphparser('app/assets/img/maps/map4/HexMap4GRAPH.png', function (err, graph) {
    if (err) {
      throw err
    }

    var sockets = []
    var game = new Game(graph)

    var gameloopIntVal = null
    var ltime = Date.now()
    var ctime
    function gameloop () {
      ctime = Date.now()
      var delta = (ctime - ltime) / 1000
      game.update(delta)
      ltime = ctime
      // console.log(JSON.stringify(game, null, 2))
      io.emit('update', game.toJSON())
    }

    gameloopIntVal = setInterval(gameloop, 1000 / 30)

    io.on('connection', function (socket) {
      sockets.push(socket)

      // if (gameState.players.size === 2) {
      //   gameloopIntVal = setTimeout(gameloop, 1000 / 30)
      // }

      socket.on('disconnect', function () {
        sockets.forEach(function (player) {
          player.close()
        })
        sockets = []
        clearInterval(gameloopIntVal)
      })
    })
  })
}

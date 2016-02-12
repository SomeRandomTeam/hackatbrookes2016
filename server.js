require('dotenv').load()

var path = require('path')

var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var methodOverride = require('method-override')
var errorHandler = require('errorhandler')
var morgan = require('morgan')
var cons = require('consolidate')

var app = module.exports = express()

app.set('port', process.env.PORT)
app.set('views', path.join(__dirname, 'app', 'views'))
app.engine('html', cons.ejs)
app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}))
app.use(bodyParser.json({limit: '50mb'}))
app.use(cookieParser())
app.use(methodOverride())

if (process.env.DEVELOPMENT) {
  var fs = require('fs')
  var publicdir = path.join(__dirname, 'public')

  app.use(function (req, res, next) {
    if (req.path.indexOf('.') === -1) {
      var file = publicdir + req.path + '.html'
      fs.exists(file, function (exists) {
        if (exists) {
          req.url += '.html'
        }
        next()
      })
    } else {
      next()
    }
  })
  app.use(express.static(path.join(__dirname, 'public')))
}

app.use('/', require('./app/controllers'))

if (process.env.DEVELOPMENT) {
  app.use(errorHandler())
}

// index.js
// where your node app starts

// init project
require('dotenv').config()
var express = require('express')
var app = express()

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors')
app.use(cors({ optionsSuccessStatus: 200 })) // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

// your first API endpoint...
app.get('/api/whoami', function (req, res) {
  // return a JSON object with your IP address in the ipaddress key.
  // return a JSON object with your preferred language in the language key.
  // return a JSON object with your software in the software key.
  res.json({
    ipaddress: req.ip,
    language: req.language,
    software: req.body,
  })
})

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})

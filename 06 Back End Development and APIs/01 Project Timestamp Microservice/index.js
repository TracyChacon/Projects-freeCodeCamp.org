// index.js
// where your node app starts

// init project
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

// API Time Stamp endpoint...
app.get('/api/:date', function (req, res) {
  const date_string = req.params['date']
  const isDateIntStrRegEx = /^[0-9]+$/
  const dateStrToInt = Number(date_string)
  const date = new Date(date_string)

  // respond with json for date that's a string of integers
  if (isDateIntStrRegEx.test(date_string)) {
    res.json({
      unix: dateStrToInt,
      utc: new Date(dateStrToInt).toUTCString(),
    })
  }
  // respond with json for valid `new Date()` inputs
  else if (!isNaN(new Date(date_string))) {
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString(),
    })
  }
  // else respond with invalid json object
  else {
    res.json({ error: 'Invalid Date' })
  }
})

// respond with current date for
app.use((req, res) => {
  const currentDate = Date.now()

  res.json({
    unix: currentDate,
    utc: new Date(currentDate).toUTCString(),
  })
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})

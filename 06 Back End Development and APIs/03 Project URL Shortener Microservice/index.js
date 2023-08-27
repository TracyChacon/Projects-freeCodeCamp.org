require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const dns = require('dns')
const bodyParser = require('body-parser')
const mongoose = require(`mongoose`)
// const ShortUrl = require('./models/shortURL')

// Basic Configuration
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: false }))

app.use(cors())

app.use('/public', express.static(`${process.cwd()}/public`))

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html')
})

// API endpoint for shortening URLs
app.post('/api/shorturl', function (req, res) {
  let hostName
  try {
    // Try to parse the hostname from the request body
    hostName = new URL(req.body.url).hostname
  } catch {
    // If the parsing fails, set the hostname to the value of req.body.url property
    hostName = req.body.url
  }
  // Resolve the hostname to an IP address
  dns.lookup(hostName, (err, address) => {
    if (err) {
      res.json({ error: 'invalid url' })
    } else {
      res.json({ ip_address: address })
    }
  })
})

app.listen(port, function () {
  console.log(`Listening on port ${port}`)
})

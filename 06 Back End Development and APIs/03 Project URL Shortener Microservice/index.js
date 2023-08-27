require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const dns = require('dns')
const mongoose = require(`mongoose`)
const ShortUrl = require('./models/shortURL')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

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
    hostName = new URL(req.body.url)
  } catch {
    // If the parsing fails, set the hostname to the value of req.body.url property
    hostName = req.body.url
  }
  // Validate the hostname by
  // resolving the hostname to an IP address
  dns.lookup(hostName.hostname, async (err, address) => {
    if (err) {
      res.json({ error: 'invalid url' })
    } else {
      // save hostname to database
      await ShortUrl.create({ full: hostName })
      // find newly created doc
      const findByHostName = await ShortUrl.findOne({ full: hostName })
      // respond with json of original_url and short_url
      res.json({ original_url: hostName, short_url: findByHostName.short })
    }
  })
})

app.listen(port, function () {
  console.log(`Listening on port ${port}`)
})

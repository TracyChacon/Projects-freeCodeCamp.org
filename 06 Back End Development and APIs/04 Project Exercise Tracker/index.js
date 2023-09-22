const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.static('public'))
// console.log(__dirname)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/frontend/views/index.html')
})

app.get('/atten', (req, res) => {
  res.sendFile(__dirname + '/frontend/views/atten.html')
})

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

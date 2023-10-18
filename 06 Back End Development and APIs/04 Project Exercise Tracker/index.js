const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const cors = require('cors')
const connectDB = require('./config/db')

const app = express()

const userRoutes = require('./routes/user')
const errorController = require('./controllers/error')

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(userRoutes)
app.use(errorController.get404)

connectDB()

const listener = app.listen(process.env.PORT || 8000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

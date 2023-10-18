const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = Schema({
  username: String,
  exerciseCount: Number,
})

module.exports = mongoose.model('User', userSchema)

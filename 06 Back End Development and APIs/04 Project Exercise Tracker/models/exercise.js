const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = Schema({
  username: String,
})

const exerciseSchema = Schema({
  description: String,
  duration: Number,
  date: Date,

  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
})

module.exports = mongoose.model('Exercise', exerciseSchema)

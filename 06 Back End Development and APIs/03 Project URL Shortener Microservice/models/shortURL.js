const { random } = require('lodash')
const mongoose = require('mongoose')

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: randomStringGenerator.generate({
      length: 8,
      charset: 'alphanumeric',
    }),
  },
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)

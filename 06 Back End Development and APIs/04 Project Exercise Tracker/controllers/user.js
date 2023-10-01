const User = require('../models/user')

const path = require('path')

exports.getMain = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/views/index.html'))
}

exports.postUser = (req, res) => {
  const username = req.body.username
  const count = 0
  const user = new User({
    username: username,
    count: count,
  })
  user
    .save()
    .then((result) => {
      res.send(`{username: "${result.username}", _id: "${result._id}"}`)
    })
    .catch((err) => {
      console.error(err)
    })
}

exports.postExercise = (req, res) => {
  console.log('Coming soon to home video!')
}

exports.getLog = (req, res) => {
  console.log('Coming soon to home video!')
}

const mongoose = require('mongoose')

const User = require('../models/user')
const Exercise = require('../models/exercise')

const path = require('path')
const exercise = require('../models/exercise')

exports.getMain = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/views/index.html'))
}

exports.postUser = async (req, res) => {
  const username = req.body.username

  const user = new User({ username: username, exerciseCount: 0 })

  await user.save()

  res.json({ username: user.username, _id: user._id })
}

// 651b6995dd508c381cbe84c6

//  {
//"_id":"651b6995dd508c381cbe84c6",      "username":"tracy",
//   "date":"Fri Mar 03 2017",
//   "duration":15,
//   "description":"barbell curls"
// }

exports.postAddExercise = async (req, res) => {
  const userId = req.params._id
  const description = req.body.description
  const duration = req.body.duration
  const date = req.body.date || new Date()

  const user = await User.findById(userId)

  const exercise = new Exercise({
    userId: userId,
    description: description,
    duration: duration,
    date: date,
  })

  await exercise.save()
  user.$inc('exerciseCount', 1).save()

  res.json({
    username: user.username,
    description: exercise.description,
    duration: exercise.duration,
    date: new Date(exercise.date).toDateString(),
    _id: userId,
  })
}

// {
//   "_id": "651b098f4c3ec20832c9f5b8",
//   "username": "tracy",
//   "count": 2,
//   "log": [
//     {
//       "description": "barbell curls",
//       "duration": 15,
//       "date": "Mon Sep 25 2023"
//     },
//     {
//       "description": "barbell curls",
//       "duration": 15,
//       "date": "Mon Sep 25 2023"
//     }
//   ]
// }

// GET user's exercise log: GET /api/users/:_id/logs?[from][&to][&limit]

// [ ] = optional

// from, to = dates (yyyy-mm-dd); limit = number

exports.getLogs = async (req, res) => {
  const userId = req.params._id
  const from = req.query.from || new Date(0)
  const to = req.query.to || new Date(Date.now())
  const limit = parseInt(req.query.limit) || 0

  const user = await User.findById(userId)

  const log = await Exercise.find({
    userId: userId,
    date: { $gte: from, $lte: to },
  })
    .select('-__v -_id -userId')
    .limit(limit)

  const formattedLog = log.map((exercise) => {
    return {
      description: exercise.description,
      duration: exercise.duration,
      date: exercise.date.toDateString(),
    }
  })

  res.send({
    _id: user._id,
    username: user.username,
    count: formattedLog.length,
    log: formattedLog,
  })
}

exports.getAllUsers = async (req, res) => {
  const user = await User.find()

  const formattedUsers = user.map((users) => {
    return {
      username: users.username,
      _id: users._id,
    }
  })

  res.json(formattedUsers)
}

const express = require('express')

const router = express.Router()

const userController = require('../controllers/user')

router.get('/', userController.getMain)

router.get('/api/users', userController.getAllUsers)

router.get('/api/users/:_id/logs', userController.getLogs)

router.post('/api/users', userController.postUser)

router.post('/api/users/:_id/exercises', userController.postAddExercise)

module.exports = router

const express = require('express')

const router = express.Router()

const userController = require('../controllers/user')

router.get('/', userController.getMain)
router.post('/api/users', userController.postUser)

module.exports = router

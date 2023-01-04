const express = require('express')
const router = express.Router()

const {login, hello} = require('../controllers/login')

const authMiddleware = require('../middleware/auth')


router.route('/login').post(login)
router.route('/hello').get(authMiddleware, hello)

module.exports = router
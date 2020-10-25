const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')


router.route('/login').post(userCtrl.authUser)
router.route('/profile').get(protect, userCtrl.getUserProfile)


module.exports = router
const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userController')
const { protect, admin } = require('../middleware/authMiddleware')

router.route('/').post(userCtrl.registerUser).get(protect, admin, userCtrl.getUsers)
router.route('/login').post(userCtrl.authUser)
router.route('/profile').get(protect, userCtrl.getUserProfile).put(protect, userCtrl.updateUserProfile)
router.route('/:id').delete(protect, admin, userCtrl.deleteUser).get(protect, admin, userCtrl.getUserById).put(protect, admin, userCtrl.updateUser)

module.exports = router
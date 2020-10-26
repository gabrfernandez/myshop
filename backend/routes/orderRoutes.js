const express = require('express')
const router = express.Router()
const orderCtrl = require('../controllers/orderController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').post(protect, orderCtrl.addOrderItems)

module.exports = router
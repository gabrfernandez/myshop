const express = require('express')
const router = express.Router()
const orderCtrl = require('../controllers/orderController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').post(protect, orderCtrl.addOrderItems)
router.route('/:id').get(protect, orderCtrl.getOrderById)
router.route('/:id/pay').put(protect, orderCtrl.updateOrderToPaid)

module.exports = router
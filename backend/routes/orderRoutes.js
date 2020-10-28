const express = require('express')
const router = express.Router()
const orderCtrl = require('../controllers/orderController')
const { protect, admin } = require('../middleware/authMiddleware')

router.route('/').post(protect, orderCtrl.addOrderItems).get(protect, admin, orderCtrl.getOrders)
router.route('/myorders').get(protect, orderCtrl.getMyOrders)
router.route('/:id').get(protect, orderCtrl.getOrderById)
router.route('/:id/pay').put(protect, orderCtrl.updateOrderToPaid)
router.route('/:id/deliver').put(protect, admin, orderCtrl.updateOrderToDelivered)

module.exports = router
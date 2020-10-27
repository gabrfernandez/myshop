const express = require('express')
const router = express.Router()
const productCtrl = require('../controllers/productController')
const { protect, admin } = require('../middleware/authMiddleware')


router.route('/').get(productCtrl.getProducts)
router.route('/:id').get(productCtrl.getProductById).delete(protect, admin, productCtrl.deleteProduct)

module.exports = router
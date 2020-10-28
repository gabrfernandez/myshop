const express = require('express')
const router = express.Router()
const productCtrl = require('../controllers/productController')
const { protect, admin } = require('../middleware/authMiddleware')


router.route('/').get(productCtrl.getProducts).post(protect, admin, productCtrl.createProduct)
router.route('/:id/reviews').post(protect, productCtrl.createProductReview)
router.route('/:id').get(productCtrl.getProductById).delete(protect, admin, productCtrl.deleteProduct).put(protect, admin, productCtrl.updateProduct)

module.exports = router
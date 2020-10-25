const express = require('express')
const router = express.Router()
const productCtrl = require('../controllers/productController')


router.route('/').get(productCtrl.getProducts)
router.route('/:id').get(productCtrl.getProductById)

module.exports = router
const { privateEncrypt } = require('crypto')
const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')


//@desc fetch all products
//@route GET /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
})

//@desc fetch single product
//@route GET /api/products/:id
//@access Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)

    } else {
        res.status(404)
        throw new Error('Product not Found')
    }
})


//@desc delete single product
//@route DELETE /api/products/:id
//@access Private admin
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        await product.remove()
        res.json({ message: 'Product removed' })

    } else {
        res.status(404)
        throw new Error('Product not Found')
    }
})

//@desc create a product
//@route POST /api/products
//@access Private admin
const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        name: 'sample name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'Sample brand',
        category: 'Sample category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample description'
    })
    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
})

//@desc update a product
//@route POST /api/products/:id
//@access Private admin
const updateProduct = asyncHandler(async (req, res) => {
    const { name, price, description, image, brand, category, countInStock } = req.body

    const product = await Product.findById(req.params.id)

    if (product) {
        product.name = name
        product.price = price
        product.description = description
        product.image = image
        product.brand = brand
        product.category = category
        product.countInStock = countInStock

        const updatedProduct = await product.save()
        res.json(updatedProduct)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})


module.exports = { getProducts, getProductById, deleteProduct, createProduct, updateProduct }
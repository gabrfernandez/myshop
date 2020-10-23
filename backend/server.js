const express = require('express') //common js
const dotenv = require('dotenv')
const colors = require('colors')
const products = require("./data/products")
const connectDB = require('./config/db')

// import express from 'express' es module
// import dotenv from 'dotenv'
// import products from './data/products.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(products)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
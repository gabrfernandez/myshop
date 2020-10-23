const express = require('express') //common js
const dotenv = require('dotenv')
const colors = require('colors')
// const products = require("./data/products") no longer using products.js file
const connectDB = require('./config/db')

const productRoutes = require('./routes/productRoutes')

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/products', productRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MONGODB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}
module.exports = connectDB

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useFindAndModify: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// })
//     .then(() => console.log('Database connection established'))
//     .catch(err => console.log('There was an error', err));
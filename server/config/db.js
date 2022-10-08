const mongoose = require('mongoose');
require('dotenv').config();


const mongooseConnection = process.env.MONGO_URL
const connectDB = () => {
    mongoose.connect(mongooseConnection, () => {
        console.log('DB Connected!')
    })
}

module.exports = connectDB
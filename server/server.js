const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')
require('dotenv').config()
const connectDB = require('./config/db')
const cookieParser = require('cookie-parser')
const registerRoute = require('./routes/registerRoute')
const userRoute = require('./routes/userRoute')
const studentRoute = require('./routes/studentRoute')


connectDB()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname)
    }
})
const upload = multer({ storage: fileStorage }).single('passport')
app.use('/api', upload, registerRoute)
app.use('/api', userRoute)
app.use('/api', studentRoute)



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
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
app.use('/api', registerRoute)
app.use('/api', userRoute)
app.use('/api', studentRoute)
app.get('/', (req, res) => {
    res.send('<h1>Successful</h1>')
})



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})
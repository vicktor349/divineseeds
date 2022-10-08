const bcrypt = require('bcrypt')
const User = require('../models/userModel')
const createToken = require('../utils/createToken')

require('dotenv').config()


// JWT LIFESPAN
const maxAge = 60 * 60 * 24 * 3 * 1000

// SIGNUP LOGIC
exports.signup = async (req, res, next) => {

    try {
        const { username, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            username,
            password: hashedPassword,
        })
        const accessToken = createToken(user)
        res.cookie('access-token', accessToken, { httpOnly: true, secure: true }, {
            maxAge: maxAge
        })
        return res.status(201).json({ msg: "Registered" })
    } catch (error) {
        next(error)
    }
}


// SIGNIN LOGIC
exports.signin = async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (!user) res.status(400).json({ msg: "Invalid Credentials" })
    const dbPassword = user.password

    await bcrypt.compare(password, dbPassword).then((match) => {
        if (!match) {
            return res.status(400).json({ msg: "Invalid Username or Password" })
        } else {
            const accessToken = createToken(user)
            res.cookie('access-token', accessToken, { httpOnly: true, secure: true }, {
                maxAge: maxAge
            })
            return res.status(200).json({ msg: "Logged In Successfully!" })
        }
    })
}
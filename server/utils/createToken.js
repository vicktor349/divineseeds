const jwt = require('jsonwebtoken')
require('dotenv').config()


const createToken = (user) => {
    const userId = user._id
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '3d'
    })
}


module.exports = createToken
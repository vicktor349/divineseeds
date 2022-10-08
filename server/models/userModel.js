const mongoose = require('mongoose')

const user = new mongoose.Schema({
    username: {
        type: 'string',
        required: true
    },
    password: {
        type: 'String',
        required: true
    }
})

const User = mongoose.model('User', user)
module.exports = User
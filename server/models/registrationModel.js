const mongoose = require('mongoose')


const registration = new mongoose.Schema({
    passport: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true,
    },
    nameOfGuardian: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true
    },
    cob: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    religion: {
        type: String,
        required: true
    },
    relationship: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    stateOfOrigin: {
        type: String,
        required: true
    },
    lga: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    alternativePhoneNumber: {
        type: String,
        required: true
    },
    lastAttendedSchool: {
        type: String,
        required: true
    },
    presentClass: {
        type: String,
        required: true
    },
    dateOfEntry: {
        type: String,
        required: true
    }
})

const Registration = mongoose.model('registration', registration)
module.exports = Registration
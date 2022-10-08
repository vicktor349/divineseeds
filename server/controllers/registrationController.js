const Register = require('../models/registrationModel')

exports.registration = async (req, res) => {
    try {
        const {
            passport,
            fullName,
            nameOfGuardian,
            dob,
            cob,
            nationality,
            religion,
            relationship,
            occupation,
            stateOfOrigin,
            lga,
            address,
            phoneNumber,
            alternativePhoneNumber,
            lastAttendedSchool,
            presentClass,
            dateOfEntry
        } = req.body



        await Register.create({
            passport,
            fullName,
            nameOfGuardian,
            dob,
            cob,
            nationality,
            religion,
            relationship,
            occupation,
            stateOfOrigin,
            lga,
            address,
            phoneNumber,
            alternativePhoneNumber,
            lastAttendedSchool,
            presentClass,
            dateOfEntry
        })
        return res.status(201).json({ msg: "Student Added Successfully!" })
    } catch (error) {
        console.log(error)
        return res.status
    }
}
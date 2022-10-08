const Registration = require('../models/registrationModel')

exports.studentController = async (req, res) => {
    try {
        const data = await Registration.find();
        res.status(200).json({
            data
        })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.deleteStudent = async (req, res) => {
    try {
        const id = req.params.id
        await Registration.findByIdAndDelete(id)
        res.status(200).json({
            msg: 'Delete Successful',
        })
    } catch (err) {
        res.status(500).json({
            err: err.message
        })
    }
}
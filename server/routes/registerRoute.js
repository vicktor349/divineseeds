const router = require('express').Router()
const multer = require('multer')
const { registration } = require('../controllers/registrationController')



const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname)
    }
})
const upload = multer({ storage: fileStorage }).single('passport')
router.route('/registration').post(upload, registration)



module.exports = router
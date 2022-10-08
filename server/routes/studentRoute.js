const router = require('express').Router()
const { studentController } = require('../controllers/studentController')
const { deleteStudent } = require('../controllers/studentController')



router.route('/students').get(studentController)
router.route('/deleteStudent/:id').delete(deleteStudent)


module.exports = router

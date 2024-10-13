const express = require('express')
const router = express.Router()

const patientController = require('../controllers/patientController')

router.get('/login',patientController.GetPatientLogin)
router.post('/login',patientController.PostPatientLogin)

module.exports = router
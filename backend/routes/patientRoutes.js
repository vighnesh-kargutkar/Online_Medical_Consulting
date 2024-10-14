const express = require("express");
const router = express.Router();

const patientController = require("../controllers/patientController");

router.get("/login", patientController.GetPatientLogin);
router.get("/login/check", patientController.CheckPatientLogin);

module.exports = router;

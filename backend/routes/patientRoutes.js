const express = require("express");
const router = express.Router();

const patientController = require("../controllers/patientController");

router.get("/login", patientController.GetLogin);
router.get("/login/check", patientController.CheckLogin);
router.post("/SignUp/Save", patientController.PostSignUpData);

module.exports = router;

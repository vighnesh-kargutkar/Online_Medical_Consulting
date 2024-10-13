const express = require("express");
const router = express.Router();

const doctorController = require("../controllers/doctorController");

router.get("/doctorData", doctorController.getDoctordata);

module.exports = router;

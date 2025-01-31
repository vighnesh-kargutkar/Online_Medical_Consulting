const express = require("express");
const router = express.Router();

const doctorController = require("../controllers/doctorController");

router.get("/doctorData", doctorController.getDoctordata);
router.get("/doctorType", doctorController.getDoctortype);

module.exports = router;

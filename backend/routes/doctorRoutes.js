const express = require("express");
const router = express.Router();
const authMiddleware = require("../auth");

const doctorController = require("../controllers/doctorController");

router.get("/doctorData", authMiddleware, doctorController.getDoctordata);
router.get("/doctorType", authMiddleware, doctorController.getDoctortype);
router.get(
  "/doctorspecialty",
  authMiddleware,
  doctorController.getDoctorspecialty
);

module.exports = router;

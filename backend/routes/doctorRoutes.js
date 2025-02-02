const express = require("express");
const router = express.Router();
const authMiddleware = require("../auth");

const doctorController = require("../controllers/doctorController");

router.get("/doctorID", authMiddleware, doctorController.getDoctorID);
router.get("/doctorData", authMiddleware, doctorController.getDoctordata);
router.get("/doctorType", doctorController.getDoctortype);
router.get(
  "/doctorspecialty",
  authMiddleware,
  doctorController.getDoctorspecialty
);

module.exports = router;

const PatientData = require("../models/patient");
exports.GetPatientLogin = async (req, res) => {
  console.log(req);
  const p_data = await PatientData.find({});
  console.log("patient login", p_data);
  res.send(p_data);
};

exports.CheckPatientLogin = async (req, res) => {
  const { email, password } = req.query;
  const p_data = await PatientData.findOne({ email: email }).exec();
  if (!p_data) {
    return res.status(404).json({
      error: "Email not found",
      message: `No data found for the ID: ${email}`,
    });
  }

  console.log("patient login", p_data._doc);
  res.send(p_data);
};

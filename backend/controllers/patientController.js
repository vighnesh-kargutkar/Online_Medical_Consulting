const PatientData = require("../models/patient");
const moment = require("moment");
exports.GetLogin = async (req, res) => {
  try {
    console.log(req);
    const p_data = await PatientData.find({});
    console.log("patient login", p_data);
    res.send(p_data);
  } catch (error) {
    console.log(error);
  }
};

exports.CheckLogin = async (req, res) => {
  try {
    const { email, password } = req.query;
    const p_data = await PatientData.findOne({ email: email }).exec();
    if (!p_data) {
      return res.status(404).json({
        error: "Email not found",
        message: `No data found for the ID: ${email}`,
      });
    }
    if (p_data._doc.password == password) {
      res.send(p_data);
    } else {
      return res.status(404).json({
        error: "Password Not match",
        message: `Invalid Password: ${email}`,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.PostSignUpData = async (req, res) => {
  try {
    const { fname, lname, email, password, cpassword, dob, gender } =
      req.body.params;
    const age = moment().diff(moment(dob, "YYYY-MM-DD"), "years");
    const FindEmailExist = await PatientData.find({ email: email });
    if (FindEmailExist.length != 0) {
      return res.status(404).json({
        error: "Email already exist Login again",
        message: `Email already exist Login again: ${email}`,
      });
    }
    const patient = new PatientData({
      firstname: fname,
      lastname: lname,
      email: email,
      password: password,
      DOB: dob,
      age: age,
      gender: gender,
    });
    const data = await patient.save();
    res.send("sucess");

    // console.log(fname, lname, email, password, cpassword, dob, gender);
  } catch (error) {
    console.log(error);
  }
};

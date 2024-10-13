const Doctordata = require("../models/doctor");


exports.getDoctordata = async (req, res, next) => {
  const docData = await Doctordata.find({});
  const data =  JSON.stringify(docData)
  // console.log(data);
  res.send(data)
};

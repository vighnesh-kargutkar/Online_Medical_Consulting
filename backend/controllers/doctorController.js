const Doctordata = require("../models/doctor");

exports.getDoctordata = async (req, res, next) => {
  const docData = await Doctordata.find({});
  const data = JSON.stringify(docData);
  // console.log(data);
  res.send(data);
};

exports.getDoctortype = async (req, res, next) => {
  try {
    const docData = await Doctordata.aggregate([
      { $group: { _id: "$specialty", count: { $sum: 1 } } },
    ]);
    const data = JSON.stringify(docData);
    // console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

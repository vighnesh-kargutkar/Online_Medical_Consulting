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

exports.getDoctorspecialty = async (req, res, next) => {
  const { specialty } = req.query;
  const docData = await Doctordata.find({ specialty: specialty });
  const data = JSON.stringify(docData);
  // console.log(data);
  res.send(data);
};

exports.getDoctorID = async (req, res, next) => {
  const { id } = req.query;
  const docData = await Doctordata.findById({ _id: id });
  const data = JSON.stringify(docData);
  res.send(data);
};

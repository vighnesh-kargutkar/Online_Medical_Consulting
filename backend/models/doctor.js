const mongoose = require("mongoose");
const { type } = require("os");

const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
  name: {
    type: String,
  },
  specialty: {
    type: String,
  },
  location: {
    type: String,
  },
  phone: {
    type: String,
  },
});

module.exports = mongoose.model("Doctor", DoctorSchema);

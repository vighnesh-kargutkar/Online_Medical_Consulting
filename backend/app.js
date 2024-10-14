const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = 3000;

const doctorRoutes = require("./routes/doctorRoutes");
const patientRoute = require("./routes/patientRoutes");
const { patientLogin } = require("./controllers/patientController");

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/doctor", doctorRoutes);
app.use("/patient", patientRoute);

mongoose
  .connect(
    "mongodb+srv://vighneshkargutkar11:z6I2PDjjdYi9yAh0@realtimehealthcare.bpec1.mongodb.net/RHSC?retryWrites=true"
  )
  .then((res) => {
    console.log(`Connected to port ${PORT}`);
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });

//gO6SZTC8dInbbFhk
//z6I2PDjjdYi9yAh0

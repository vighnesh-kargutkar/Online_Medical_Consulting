const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT;
const MONGO_CONNECTION = process.env.MONGO_CONNECTION;

const doctorRoutes = require("./routes/doctorRoutes");
const patientRoute = require("./routes/patientRoutes");

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use("/doctor", doctorRoutes);
app.use("/patient", patientRoute);

mongoose
  .connect(MONGO_CONNECTION)
  .then((res) => {
    console.log(`Connected to port ${PORT}`);
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });

//gO6SZTC8dInbbFhk
//z6I2PDjjdYi9yAh0

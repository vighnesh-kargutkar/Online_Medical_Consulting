import moment from "moment";
import classes from "./Signup.module.css";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ModuleCacheMap } from "vite/runtime";
import ResultModal from "./Modal";
import { Fragment } from "react";
import { useRef } from "react";
export default function SignupPage() {
  const date = moment().format("YYYY-MM-DD");
  const navigate = useNavigate();
  const dialog = useRef();
  const [enteredData, setEnteredData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
    dob: "",
    gender: "",
  });
  const [checkEdit, setCheckEdit] = useState({
    fname: false,
    lname: false,
    email: false,
    password: false,
    cpassword: false,
    dob: false,
    gender: false,
  });
  const [errors, setError] = useState();
  function handleChange(name, value) {
    setEnteredData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setCheckEdit((prev) => ({
      ...prev,
      [name]: false,
    }));
  }
  function handleBlur(name) {
    setCheckEdit((prev) => ({
      ...prev,
      [name]: true,
    }));
  }
  function handlereset() {
    setEnteredData({
      fname: "",
      lname: "",
      email: "",
      password: "",
      cpassword: "",
      dob: "",
      gender: "",
    });
    setCheckEdit({
      fname: false,
      lname: false,
      email: false,
      password: false,
      cpassword: false,
      dob: false,
      gender: false,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleLogin() {
    navigate("/login");
  }
  async function handleSignup() {
    try {
      const response = await axios.post(
        "http://localhost:3000/patient/SignUp/Save",
        {
          params: enteredData,
        }
      );
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        if (error.response.data.error == "Email already exist Login again") {
          // navigate("/login");
          dialog.current.open();
        } else {
          setError("Unauthorized access - 401 error");
        }
      } else {
        setError("Error:", error.message);
      }
    }
  }
  const invalidFname = checkEdit.fname && enteredData.fname == "";
  const invalidLname = checkEdit.lname && enteredData.lname == "";
  const invalidEMail = checkEdit.email && !enteredData.email.includes("@");
  const invalidPassword = checkEdit.password && enteredData.password == "";
  const invalidCpassword = checkEdit.cpassword && enteredData.cpassword == "";
  const invalidDob = checkEdit.dob && enteredData.dob == "";
  const invalidGender = checkEdit.gender && enteredData.gender == "";
  return (
    <Fragment>
      <ResultModal
        ref={dialog}
        message="Email already exist Login again"
        navlink="login"
      />
      <div className={classes.div1}>
        <Helmet>
          <title>Signup</title>
        </Helmet>
        <form className={classes.form1} onSubmit={handleSubmit}>
          <h1>RHSC Signup</h1>
          {errors && <p>{errors}</p>}
          <div>
            <label htmlFor="" className={classes.label}>
              First name
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              id="Fname"
              name="fname"
              onBlur={() => handleBlur("fname")}
              onChange={(event) => handleChange("fname", event.target.value)}
              value={enteredData.fname}
            />
            {invalidFname && (
              <p className={classes.error}>Invalid First Name</p>
            )}
          </div>
          <div>
            <label htmlFor="" className={classes.label}>
              Last name
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              id="lname"
              name="lname"
              onBlur={() => handleBlur("lname")}
              onChange={(event) => handleChange("lname", event.target.value)}
              value={enteredData.lname}
            />
            {invalidLname && <p className={classes.error}>Invalid Last Name</p>}
          </div>
          <div>
            <label htmlFor="" className={classes.label}>
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              id="email"
              name="email"
              onBlur={() => handleBlur("email")}
              onChange={(event) => handleChange("email", event.target.value)}
              value={enteredData.email}
            />
            {invalidEMail && <p className={classes.error}>Invalid Email</p>}
          </div>
          <div>
            <label htmlFor="" className={classes.label}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              id="password"
              name="password"
              onBlur={() => handleBlur("password")}
              onChange={(event) => handleChange("password", event.target.value)}
              value={enteredData.password}
            />
            {invalidPassword && (
              <p className={classes.error}>Invalid Password</p>
            )}
          </div>
          <div>
            <label htmlFor="" className={classes.label}>
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Enter Confirm Password"
              id="cpassword"
              name="cpassword"
              onBlur={() => handleBlur("cpassword")}
              onChange={(event) =>
                handleChange("cpassword", event.target.value)
              }
              value={enteredData.cpassword}
            />
            {invalidCpassword && (
              <p className={classes.error}>Invalid Confirm Password </p>
            )}
          </div>
          <div>
            <label htmlFor="" className={classes.label}>
              Select Date if Birth
            </label>
            <input
              type="date"
              id="start"
              name="dob"
              max={date}
              onBlur={() => handleBlur("dob")}
              onChange={(event) => handleChange("dob", event.target.value)}
              value={enteredData.dob}
            />
            {invalidDob && (
              <p className={classes.error}>Invalid Date of Birth</p>
            )}
          </div>
          <div>
            <select
              id="gender"
              name="gender"
              className={classes.select}
              onBlur={() => handleBlur("gender")}
              onChange={(event) => handleChange("gender", event.target.value)}
              value={enteredData.gender}
            >
              <option value="" disabled selected>
                Select your gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {invalidGender && <p className={classes.error}>Invalid Gender</p>}
          </div>
          <div className={classes.div_row}>
            <button
              className={classes.button_flat}
              type="button"
              onClick={handlereset}
            >
              Reset
            </button>
            <button className={classes.button_flat} onClick={handleSignup}>
              SignUp
            </button>
            <button className={classes.button_flat} onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

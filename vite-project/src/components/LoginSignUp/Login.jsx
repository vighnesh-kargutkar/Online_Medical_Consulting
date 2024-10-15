import axios from "axios";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import Logo from "../../../public/LOGO.jpg";
import { Helmet } from "react-helmet";
export default function LoginPage() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  const [checkEdit, setCheckEdit] = useState({
    email: false,
    password: false,
  });
  const [errors, setError] = useState();
  const navigate = useNavigate();

  function handleChange(name, value) {
    setEnteredValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    setCheckEdit((prev) => ({
      ...prev,
      [name]: false,
    }));
  }

  function handleBLur(name) {
    setCheckEdit((prev) => ({
      ...prev,
      [name]: true,
    }));
  }

  function handleClear() {
    setEnteredValues({
      email: "",
      password: "",
    });
    setCheckEdit({
      email: false,
      password: false,
    });
  }
  function SignUP() {
    navigate("/SignUp");
  }
  async function Login() {
    try {
      if (enteredValues.email.includes("@") || enteredValues.password != "") {
        const response = await axios.get(
          "http://localhost:3000/patient/login/check",
          { params: enteredValues }
        );

        console.log(response);
        if (response.status != 200) {
          response.statusText;
          setError("Fetching events failed.");
        } else {
          const resData = response.data;
          console.log(resData);
          navigate("/home");
        }
      } else {
        setCheckEdit({
          email: true,
          password: true,
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        if (error.response.data.error == "Email not found") {
          navigate("/SignUp");
        } else if (error.response.data.error == "Password Not match")
          setError("Invalid password");
        // Handle redirect to login or show error message
      } else {
        setError("Error:", error.message);
      }
    }
  }

  const invalidEMail = checkEdit.email && !enteredValues.email.includes("@");
  const invalidPassword = checkEdit.password && enteredValues.password == "";
  // console.log(checkEdit.password, enteredValues.password == null);

  function handleSUbmited(event) {
    event.preventDefault();
    // console.log(enteredValues);
  }
  return (
    <Fragment>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <form onSubmit={handleSUbmited}>
        <div className={classes.div1}>
          <img src={Logo} alt="" />
          <h1>RHSC Login</h1>
          <div className={classes.div_col}>
            {errors && <p className={classes.error}>{errors}</p>}
            <label htmlFor="" className={classes.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              onBlur={() => handleBLur("email")}
              value={enteredValues.email}
              placeholder=" Enter your email"
              onChange={(event) => handleChange("email", event.target.value)}
            />
            {invalidEMail && <p className={classes.error}>Invalid email</p>}
          </div>

          <div className={classes.div_col}>
            <label htmlFor="" className={classes.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              onBlur={() => handleBLur("password")}
              value={enteredValues.password}
              placeholder=" Enter your password"
              onChange={(event) => handleChange("password", event.target.value)}
            />
            {invalidPassword && <p className={classes.error}>Enter password</p>}
          </div>
          {/* {errors && (
            <div className={classes.div_row}>
              <p>errros</p>
            </div>
          )} */}
          <div className={classes.div_row}>
            <button
              className={classes.button_flat}
              type="button"
              onClick={handleClear}
            >
              Reset
            </button>
            <button onClick={SignUP} className={classes.button_flat}>
              SignUp
            </button>
            <button onClick={Login} className={classes.button_flat}>
              Login
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
}

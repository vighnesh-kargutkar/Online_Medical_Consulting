import moment from "moment";
import classes from "./Signup.module.css";
import { Helmet } from "react-helmet";
export default function SignupPage() {
  const date = moment().format("YYYY-MM-DD");
  return (
    <div className={classes.div1}>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <form className={classes.form1}>
        <h1>RHSC Signup</h1>
        <div>
          <label htmlFor="" className={classes.label}>
            First name
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            id="Fname"
            name="fname"
          />
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
          />
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
          />
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
          />
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
          />
        </div>
        <div>
          <label htmlFor="" className={classes.label}>
            Select Date if Birth
          </label>
          <input type="date" id="start" name="date" value={date} max={date} />
        </div>
        <div>
          <select id="gender" name="gender" className={classes.select}>
            <option value="" disabled selected>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className={classes.div_row}>
          <button className={classes.button_flat} type="button">
            Reset
          </button>
          <button className={classes.button_flat}>SignUp</button>
          <button className={classes.button_flat}>Login</button>
        </div>
      </form>
    </div>
  );
}

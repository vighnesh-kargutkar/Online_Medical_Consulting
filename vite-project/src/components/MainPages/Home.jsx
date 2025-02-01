import { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import "./Home.css";
import classes from "./Homeclass.module.css";
import { Link, Outlet } from "react-router-dom";
import HomeCard from "../Cards/HomeCard";
import docimage from "../../assets/DocImage.jpg";
const token = localStorage.getItem("token");

export default function HomePage() {
  const [doctype, setDoctype] = useState("");
  useEffect(() => {
    async function DocterType() {
      const response = await axios.get(
        "http://localhost:3000/doctor/doctorType",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status != 200) {
        console.log(response);
      } else {
        const resData = response.data;
        setDoctype(resData);
      }
    }
    DocterType();
  }, []);

  return (
    <Fragment>
      <Outlet />
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 className={classes.h1tag}>Wellcome to RHSC</h1>
      <div className={classes.cards}>
        <HomeCard
          image={docimage}
          header="Instant Consultant"
          data="Connect with specalist doctors"
        />
        <HomeCard
          image={docimage}
          header="Find doctors"
          data="book appontment"
        />
        <HomeCard
          image={docimage}
          header="Find medicine"
          data="order medicine"
        />
      </div>
      <div className={classes.div1}>
        <h1>Consult top doctors online for any health concern</h1>
        <h3>
          Private online consultations with verified doctors in all specialists
        </h3>
        {!doctype && <h1 className={classes.h1tag}>Loading ...</h1>}
        {doctype && (
          <div className={classes.div2}>
            {doctype.map((item, index) => (
              <div className={classes.div3} key={index}>
                <h2>{item._id} specialists</h2>
                <p>Number of Doctors {item.count}</p>
                <Link to={`/doctorspecialty/${item._id}`}>Select</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
}

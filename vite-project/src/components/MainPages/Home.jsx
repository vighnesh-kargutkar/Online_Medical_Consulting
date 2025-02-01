import { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./Home.css";
import classes from "./Homeclass.module.css";
import { Outlet } from "react-router-dom";
import HomeCard from "../Cards/HomeCard";
import docimage from "../../assets/DocImage.jpg";

export default function HomePage() {
  const [doctype, setDoctype] = useState("");
  useEffect(() => {
    async function DocterType() {
      const response = await fetch("http://localhost:3000/doctor/doctorType");
      const data = await response.json();
      setDoctype(data);
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
              </div>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
}

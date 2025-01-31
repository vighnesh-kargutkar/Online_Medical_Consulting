import { Fragment } from "react";
import { Helmet } from "react-helmet";
import "./Home.css";
import classes from "./Homeclass.module.css";
import { Outlet } from "react-router-dom";
import HomeCard from "../Cards/HomeCard";
import docimage from "../../assets/DocImage.jpg";

export default function HomePage() {
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
    </Fragment>
  );
}

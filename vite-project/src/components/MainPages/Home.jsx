import { Fragment } from "react";
import { Helmet } from "react-helmet";
import "./Home.css";
import MainNavigation from "../Navigation/MainNavigation";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <Fragment>
      <Outlet />
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Wellcome to RHSC</h1>
    </Fragment>
  );
}

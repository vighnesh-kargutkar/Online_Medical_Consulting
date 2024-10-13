import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import classes from "../Navigation/MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <Fragment>
      <main>
        <nav>
          <ul className={classes.list}>
            <NavLink
              to="/Home"
              className={({ isActive }) =>
                isActive ? classes.liiactive : classes.lii
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/Consult"
              className={({ isActive }) =>
                isActive ? classes.liiactive : classes.lii
              }
            >
              Consult
            </NavLink>
            {/* <NavLink
              to="/Medicine"
              className={({ isActive }) =>
                isActive ? classes.liiactive : classes.lii
              }
            >
              Medicine
            </NavLink>
            <NavLink
              to="/Disease"
              className={({ isActive }) =>
                isActive ? classes.liiactive : classes.lii
              }
            >
              Disease
            </NavLink> */}
          </ul>
        </nav>
      </main>
      <Outlet />
    </Fragment>
  );
}

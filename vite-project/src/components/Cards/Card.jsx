import { Fragment } from "react";
import docimage from "../../assets/DocImage.jpg";
import classes from "../Cards/Card.module.css";
import { Link } from "react-router-dom";

export default function CardComp({ data }) {
  return (
    <Fragment>
      <div className={classes.div2}>
        <img src={docimage} className={classes.image}></img>
        <h2>{data.name}</h2>
        <h2>{data.specialty}</h2>
        <Link to="/Book">Book Appointment</Link>
      </div>
    </Fragment>
  );
}

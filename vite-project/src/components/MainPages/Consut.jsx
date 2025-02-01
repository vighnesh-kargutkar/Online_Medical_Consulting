import { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CardComp from "../Cards/Card";
import classes from "../Cards/Card.module.css";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

export default function ConsultPage() {
  const { result } = useLoaderData();
  const doctorData = result;
  return (
    <Fragment>
      <Helmet>
        <title>Consult</title>
      </Helmet>
      <h1 className={classes.h1tag}>Doctor list</h1>
      {!doctorData && <h1 className={classes.h1tag}>Loading ...</h1>}
      {doctorData && (
        <div className={classes.div1}>
          {doctorData.map((item, index) => (
            <CardComp key={index} data={item} />
          ))}
        </div>
      )}
    </Fragment>
  );
}

export async function loader() {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      "http://localhost:3000/doctor/doctorData",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const resData = response.data;
    return { result: resData };
  } catch (error) {
    console.log(error);
  }
}

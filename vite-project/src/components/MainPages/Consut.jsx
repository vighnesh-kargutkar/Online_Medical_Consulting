import { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CardComp from "../Cards/Card";
import classes from "../Cards/Card.module.css";
import axios from "axios";

export default function ConsultPage() {
  const [doctorData, setDoctorData] = useState("");
  const [errors, setError] = useState();
  useEffect(() => {
    async function docotordata() {
      try {
        const response = await axios.get(
          "http://localhost:3000/doctor/doctorData"
        );
        console.log(response);
        if (response.status != 200) {
          response.statusText;
          setError("Fetching events failed.");
        } else {
          const resData = response.data;
          setDoctorData(resData);
        }
      } catch (error) {
        console.log(error);
      }
    }
    docotordata();
  }, []);
  return (
    <Fragment>
      <Helmet>
        <title>Consult</title>
      </Helmet>
      <h1 className={classes.h1tag}>Doctor list</h1>
      {!doctorData && <h1 className={classes.h1tag}>Loading ...</h1>}
      {errors && <p className={classes.error}>{errors}</p>}
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

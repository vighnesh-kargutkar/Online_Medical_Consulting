import { Helmet } from "react-helmet";
import CardComp from "../Cards/Card";
import classes from "../Cards/Card.module.css";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ConsultPage() {
  const { result, error } = useLoaderData();
  const navigate = useNavigate();
  useEffect(() => {
    if (error == "Invalid Token") {
      navigate("/login");
    }
  }, [error]);
  const doctorData = result;
  return (
    <>
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
    </>
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
    if (response.status != 200) {
      return response;
    } else {
      const resData = response.data;
      return { result: resData };
    }
  } catch (error) {
    return error.response.data;
  }
}

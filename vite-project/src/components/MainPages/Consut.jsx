import { Helmet } from "react-helmet";
import CardComp from "../Cards/Card";
import classes from "../Cards/Card.module.css";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ConsultPage() {
  const { result, error } = useLoaderData();
  const navigate = useNavigate();
  useEffect(() => {
    if (error == "Invalid Token") {
      toast.error("Login to continue...", { autoClose: 2000 });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [error]);
  const doctorData = result;
  return (
    <>
      <ToastContainer />
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
    const email = localStorage.getItem("email");
    const response = await axios.get(
      "http://localhost:3000/doctor/doctorData",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        params: { email: email },
      }
    );
    if (response.status != 200) {
      return response;
    } else {
      const resData = response.data;
      return { result: resData };
    }
  } catch (error) {
    if (error.response) {
      return {
        error: error.response.data.error,
        status: error.response.status,
      };
    } else {
      return {
        error: "Network error, please try again",
        status: 500,
      };
    }
  }
}

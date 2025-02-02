import axios from "axios";
import { useLoaderData, defer, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import CardComp from "../Cards/Card";
import classes from "../Cards/Card.module.css";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SelectedDoctors() {
  const { result, specialty, error } = useLoaderData();
  const navigate = useNavigate();
  useEffect(() => {
    if (error == "Invalid Token") {
      toast.error("Login to continue...", { autoClose: 2000 });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [error]);
  return (
    <>
      <ToastContainer />
      <h1 className={classes.h1tag}>Select Doctor for {specialty}</h1>
      <div className={classes.div1}>
        {result &&
          result.map((item, index) => <CardComp key={index} data={item} />)}
      </div>
    </>
  );
}
export async function loader({ request, params }) {
  try {
    const id = params.type;
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const response = await axios.get(
      "http://localhost:3000/doctor/doctorspecialty",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        params: { specialty: id, email: email },
      }
    );
    if (response.status != 200) {
      return response;
    } else {
      const resData = response.data;
      return { result: resData, specialty: id };
    }
  } catch (error) {
    if (error.response) {
      return {
        error: error.response.data.error,
        status: error.response.status,
        specialty: error.config.params.specialty,
      };
    } else {
      return {
        error: "Network error, please try again",
        status: 500,
      };
    }
  }
}

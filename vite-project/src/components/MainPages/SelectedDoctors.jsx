import axios from "axios";
import { useLoaderData, defer, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import CardComp from "../Cards/Card";
import classes from "../Cards/Card.module.css";

export default function SelectedDoctors() {
  const { result, specialty, error } = useLoaderData();
  const navigate = useNavigate();
  useEffect(() => {
    if (error == "Invalid Token") {
      navigate("/login");
    }
  }, [error]);
  return (
    <>
      <h1 className={classes.h1tag}>Select Doctor for {specialty}</h1>
      <div className={classes.div1}>
        {result.map((item, index) => (
          <CardComp key={index} data={item} />
        ))}
      </div>
    </>
  );
}
export async function loader({ request, params }) {
  try {
    const id = params.type;
    const token = localStorage.getItem("token");
    const response = await axios.get(
      "http://localhost:3000/doctor/doctorspecialty",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        params: { specialty: id },
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
      return json(
        { error: error.response.data.error },
        { status: error.response.status }
      );
    } else {
      throw json({ error: "Network error, please try again" }, { status: 500 });
    }
  }
}

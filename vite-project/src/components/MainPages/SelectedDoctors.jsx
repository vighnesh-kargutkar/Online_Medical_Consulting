import axios from "axios";
import { useLoaderData, defer } from "react-router-dom";
import { Outlet } from "react-router-dom";
import CardComp from "../Cards/Card";
import classes from "../Cards/Card.module.css";
export default function SelectedDoctors() {
  const { result, specialty } = useLoaderData();
  console.log(result);
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
  const resData = response.data;
  //   console.log(resData);
  return { result: resData, specialty: id };
}

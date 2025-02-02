import { Helmet } from "react-helmet";
import axios from "axios";
import "./Home.css";
import classes from "./Homeclass.module.css";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import HomeCard from "../Cards/HomeCard";
import docimage from "../../assets/DocImage.jpg";

export default function HomePage() {
  const { result } = useLoaderData();
  const doctype = result;
  return (
    <>
      <Outlet />
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 className={classes.h1tag}>Wellcome to RHSC</h1>
      <div className={classes.cards}>
        <HomeCard
          image={docimage}
          header="Instant Consultant"
          data="Connect with specalist doctors"
        />
        <HomeCard
          image={docimage}
          header="Find doctors"
          data="book appontment"
        />
        <HomeCard
          image={docimage}
          header="Find medicine"
          data="order medicine"
        />
      </div>
      <div className={classes.div1}>
        <h1>Consult top doctors online for any health concern</h1>
        <h3>
          Private online consultations with verified doctors in all specialists
        </h3>
        {!doctype && <h1 className={classes.h1tag}>Loading ...</h1>}
        {doctype && (
          <div className={classes.div2}>
            {doctype.map((item, index) => (
              <div className={classes.div3} key={index}>
                <h2>{item._id} specialists</h2>
                <p>Number of Doctors {item.count}</p>
                <Link to={`/doctorspecialty/${item._id}`}>Select</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export async function loader() {
  try {
    const response = await axios.get("http://localhost:3000/doctor/doctorType");
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

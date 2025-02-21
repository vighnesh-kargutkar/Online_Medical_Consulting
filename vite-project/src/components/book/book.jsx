import axios from "axios";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import classes from "../book/book.module.css";

const generateTimeSlots = () => {
  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute of [0, 30]) {
      const time = new Date();
      time.setHours(hour, minute, 0, 0);
      const formattedTime = time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      times.push(formattedTime);
    }
  }
  return times;
};

export default function Bookpage() {
  const [selectedTime, setSelectedTime] = useState("");
  const timeSlots = generateTimeSlots();

  const { result, error } = useLoaderData();
  console.log(result);
  const navigate = useNavigate();
  useEffect(() => {
    if (error == "Invalid Token") {
      toast.error("Login to continue...", { autoClose: 2000 });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [error]);
  const DoctorData = result;
  return (
    <>
      <h1 className={classes.h1tag}>Doctors detail </h1>
      <div>
        <h2>Name {DoctorData.name}</h2>
        <h2>specalist {DoctorData.specialty} </h2>
        <h2>Loaction {DoctorData.location}</h2>
        <h2>Book Slot</h2>
        <div>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="">Select Time</option>
            {timeSlots.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <h2>Fees {DoctorData.fees}</h2>
      </div>
    </>
  );
}
export async function loader({ request, params }) {
  try {
    const id = params._id;
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const response = await axios.get("http://localhost:3000/doctor/doctorID", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      params: { id: id, email: email },
    });
    if (response.status != 200) {
      return { response };
    } else {
      return { result: response.data };
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

import axios from "axios";
import { useLoaderData, defer } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function SelectedDoctors() {
  const { result } = useLoaderData();
  console.log(result);
  return (
    <>
      <h1>heelo from selected doc</h1>
    </>
  );
}
export async function loader({ request, params }) {
  const id = params.type;
  const response = await axios.get(
    "http://localhost:3000/doctor/doctorspecialty",
    { params: { specialty: id } }
  );
  const resData = response.data;
  //   console.log(resData);
  return { result: resData };
}

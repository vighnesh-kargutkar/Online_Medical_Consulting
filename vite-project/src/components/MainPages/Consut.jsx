import { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CardComp from "../Cards/Card";
import classes from "../Cards/Card.module.css";

export default  function ConsultPage() {
  const [ doctorData , setDoctorData]=useState('')
  useEffect( () => {
    async function docotordata(){
      const response = await fetch('http://localhost:3000/doctor/doctorData')
      const data = await response.json()
      setDoctorData(data)
    }
    docotordata()
  
  }, []);
  return (
    <Fragment>
      <Helmet>
        <title>Consult</title>
      </Helmet>
      <h2>Doctor list</h2>
      { !doctorData && <p>Loading ...</p>}
      { doctorData && 
      <div className={classes.div1}>
        {doctorData.map((item, index) => (
          <CardComp key={index} data={item} />
        ))}
      </div>
      }
    </Fragment>
  );
}

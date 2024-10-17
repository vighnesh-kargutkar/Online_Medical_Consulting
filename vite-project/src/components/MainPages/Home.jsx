import { Fragment } from "react";
import { Helmet } from "react-helmet";
import "./Home.css";

export default function HomePage() {
  return (
    <Fragment>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <h1>slide 1</h1>
          </div>
          <div className="slide">
            <h1>slide 2</h1>
          </div>
          <div className="slide">
            <h1>slide 3</h1>
          </div>
          <div className="slide">
            <h1>slide 4</h1>
          </div>
          <div className="slide">
            <h1>slide 5</h1>
          </div>
          <div className="slide">
            <h1>slide 6</h1>
          </div>
          <div className="slide">
            <h1>slide 7</h1>
          </div>
          <div className="slide">
            <h1>slide 8</h1>
          </div>
          <div className="slide">
            <h1>slide 9</h1>
          </div>
        </div>
        {/* <h2>Consult Specialist Doctors Online</h2>
        <h2>on Video/Audio Call & and Chat</h2> */}
      </div>
      <h1>Wellcome to RHSC</h1>
    </Fragment>
  );
}

import { Fragment } from "react";
import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <Fragment>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Home Page</h1>
      <h1>Wellcome</h1>
    </Fragment>
  );
}

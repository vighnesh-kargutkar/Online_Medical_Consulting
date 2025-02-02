import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./components/LoginSignUp/Login.jsx";
import SignupPage from "./components/LoginSignUp/Signup.jsx";
import HomePage, {
  loader as HomePageLoader,
} from "./components/MainPages/Home.jsx";
import ConsultPage, {
  loader as ConsultPageLoader,
} from "./components/MainPages/Consut.jsx";
import MedicinePage from "./components/MainPages/Medicine.jsx";
import DiseasePage from ".//components/MainPages/Disease.jsx";
import MainNavigation from "./components/Navigation/MainNavigation.jsx";
import SelectedDoctors, {
  loader as SelectedDoctorsloader,
} from "./components/MainPages/SelectedDoctors.jsx";
// https://rxnav.nlm.nih.gov/REST/RxTerms/allconcepts.json
// https://rxnav.nlm.nih.gov/REST/drugs.json?name=

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: HomePageLoader,
      },
      {
        path: "/home",
        element: <HomePage />,
        loader: HomePageLoader,
      },
      {
        path: "/doctorspecialty",
        children: [
          {
            path: ":type",
            loader: SelectedDoctorsloader,
            element: <SelectedDoctors />,
          },
        ],
      },
      {
        path: "/Consult",
        element: <ConsultPage />,
        loader: ConsultPageLoader,
      },
      {
        path: "/Medicine",
        element: <MedicinePage />,
      },
      {
        path: "/Disease",
        element: <DiseasePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/SignUp",
    element: <SignupPage />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

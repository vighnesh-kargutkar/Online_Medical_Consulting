import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./components/LoginSignUp/Login.jsx";
import SignupPage from "./components/LoginSignUp/Signup.jsx";
import HomePage from "./components/MainPages/Home.jsx";
import ConsultPage from "./components/MainPages/Consut.jsx";
import MedicinePage from "./components/MainPages/Medicine.jsx";
import DiseasePage from ".//components/MainPages/Disease.jsx";
import MainNavigation from "./components/Navigation/MainNavigation.jsx";
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
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/Consult",
        element: <ConsultPage />,
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

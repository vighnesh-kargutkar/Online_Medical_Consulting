import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./components/LoginSignUp/Login.jsx";
import SignupPage from "./components/LoginSignUp/Signup.jsx";
import HomePage from "./components/MainPages/Home.jsx";
// https://rxnav.nlm.nih.gov/REST/RxTerms/allconcepts.json
// https://rxnav.nlm.nih.gov/REST/drugs.json?name=

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/SignUp",
    element: <SignupPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
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

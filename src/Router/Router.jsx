import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Home from "../Page/Home/Home";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Login from "../Page/Login/Login";
import Dashboard from "../Layout/Dashboard";
import SurveyCreation from "../Page/SurveyCreation/SurveyCreation";
import Surveys from "../Page/Surveys/Surveys";
import SurveyDetails from "../Page/SurveyDetails/SurveyDetails";
import Registrations from "../Page/Registrations/Registrations";
import AboutUs from "../Page/AboutUs/AboutUs";
import ContactUs from "../Page/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/surveys",
        element: <Surveys></Surveys>,
      },
      {
        path: "/survey/:_id",
        element: <SurveyDetails></SurveyDetails>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registrations></Registrations>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "surveycreation",
        element: <SurveyCreation></SurveyCreation>,
      },
    ],
  },
]);
export default router;

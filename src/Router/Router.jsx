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
import PrivateRoute from "./PrivateRoute";
import AccessControl from "../Page/AccessControl/AccessControl";
import Pricing from "../Page/Pricing/Pricing";
import ProUser from "../Page/ProUser/ProUser";

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
      {
        path:"/pricing",
        element:<Pricing></Pricing>
      },
      {
        path:"/prouser",
        element:<ProUser></ProUser>
      }
      
    ],
  },
  {
    path: "dashboard",
    element:<PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "surveycreation",
        element: <SurveyCreation></SurveyCreation>,
      },
      {
        path: "accesscontrol",
        element: <AccessControl></AccessControl>,
      },
    ],
  },
]);
export default router;

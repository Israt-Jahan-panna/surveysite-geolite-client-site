import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Layout/Roots";
import Home from "../Page/Home/Home";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Login from "../Page/Login/Login";
import Dashboard from "../Layout/Dashboard";
import SurveyCreation from "../Page/SurveyCreation/SurveyCreation";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
          
        },
      
        
        {
          path:"/login",
          element:<Login></Login>
        }
    ]
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children:[
        {
          path:"surveycreation",
          element:<SurveyCreation></SurveyCreation>
        }
      ]
    }
  ]);
  export default router;
import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Layout/Roots";
import Home from "../Page/Home/Home";
import ErrorPage from "../Page/ErrorPage/ErrorPage";




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
        //   element:<Login></Login>
        }
    ]
    },
  ]);
  export default router;
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Footer from "../Shared/Footer";
import Nabver from "../Shared/Nabver";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/footer',
            element:<Footer></Footer>
        },
        {
          path:'/navber',
          element:<Nabver></Nabver>
        },
        {
          path:"/login",
          element:<Login></Login>
        }
      ]
    },
  ]);
  export default router;
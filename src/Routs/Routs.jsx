import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Footer from "../Shared/Footer";
import Nabver from "../Shared/Nabver";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import CheckOut from "../pages/CheckOut";
import Bookings from "../pages/Bookings";
import PrivetRouts from "../pages/PrivetRouts";


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
        },{
          path:"/signup",
          element:<SignUp></SignUp>
        },
        {
          path:"checkout/:id",
          element:<CheckOut></CheckOut>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:"bookings",
          element:<PrivetRouts><Bookings></Bookings></PrivetRouts>
        }
      ]
    },
  ]);
  export default router;
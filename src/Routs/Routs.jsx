import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Footer from "../Shared/Footer";
import Nabver from "../Shared/Nabver";

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
        }
      ]
    },
  ]);
  export default router;
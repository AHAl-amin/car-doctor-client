import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Nabver from "../Shared/Nabver";


const Main = () => {
    return (
        <div>
            <Nabver></Nabver>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
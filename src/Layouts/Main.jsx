import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import {FaBars} from "@react-icons/all-files/fa/FaBars";

const Main = () => {
    return (
        <div className="drawer lg:drawer-open bg-white">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <label htmlFor="my-drawer-2" className="lg:hidden p-4"><FaBars className="text-2xl" /></label>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <Header />
            </div>
        </div>
    );
};

export default Main;
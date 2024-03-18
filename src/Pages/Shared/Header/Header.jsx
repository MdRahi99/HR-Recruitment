import { Link } from "react-router-dom";
import logo1 from "../../../Assets/logo1.png";
import logo2 from "../../../Assets/logo2.png";
import icon1 from "../../../Assets/icon1.png";
import icon2 from "../../../Assets/icon2.png";
import icon3 from "../../../Assets/icon3.png";

const Header = () => {
    return (
        <div className="menu flex flex-col gap-8 w-64 py-4 px-8 min-h-full">
            <div className="flex items-center justify-center">
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="font-bold text-[12px]">Menu</h1>
                <Link to='/' className="flex items-center gap-4 hover:text-white rounded-lg p-2 hover:bg-teal-600">
                    <img src={icon1} alt="" />
                    <h1>Dashboard</h1>
                </Link>
                <Link to='/' className="flex items-center gap-4 hover:text-white rounded-lg p-2 hover:bg-teal-600">
                    <img src={icon2} alt="" />
                    <h1>Message</h1>
                </Link>
                <Link to='/' className="flex items-center gap-4 hover:text-white rounded-lg p-2 hover:bg-teal-600">
                    <img src={icon3} alt="" />
                    <h1>Calender</h1>
                </Link>
            </div>
        </div>
    );
};

export default Header;
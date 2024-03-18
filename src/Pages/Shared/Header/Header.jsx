import { NavLink } from "react-router-dom";
import logo1 from "../../../Assets/logo1.png";
import logo2 from "../../../Assets/logo2.png";
import icon1 from "../../../Assets/icon1.png";
import icon2 from "../../../Assets/icon2.png";
import icon3 from "../../../Assets/icon3.png";
import icon4 from "../../../Assets/icon4.png";
import icon5 from "../../../Assets/icon5.png";
import icon6 from "../../../Assets/icon6.png";
import icon7 from "../../../Assets/icon7.png";
import icon8 from "../../../Assets/icon8.png";
import icon9 from "../../../Assets/icon9.png";
import icon10 from "../../../Assets/icon10.png";
import icon11 from "../../../Assets/icon11.png";
import icon12 from "../../../Assets/icon12.png";

const Header = () => {
    return (
        <div className="menu flex flex-col gap-4 w-64 py-4 px-8 min-h-full bg-white">
            <div className="flex items-center justify-center">
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
            </div>
            <div className="flex flex-col gap-1">
                <h1 className="font-bold text-[12px]">Menu</h1>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'flex items-center gap-4 text-white rounded-lg p-2 bg-teal-600' : 'flex items-center gap-4 hover:text-white hover:bg-teal-600 rounded-lg p-2')}>
                    <img src={icon1} alt="" />
                    <h1>Dashboard</h1>
                </NavLink>
                <NavLink to='/message' className={({ isActive }) => (isActive ? 'flex items-center gap-4 text-white rounded-lg p-2 bg-teal-600' : 'flex items-center gap-4 hover:text-white hover:bg-teal-600 rounded-lg p-2')}>
                    <img src={icon2} alt="" />
                    <h1>Message</h1>
                </NavLink>
                <NavLink to='/calender' className={({ isActive }) => (isActive ? 'flex items-center gap-4 text-white rounded-lg p-2 bg-teal-600' : 'flex items-center gap-4 hover:text-white hover:bg-teal-600 rounded-lg p-2')}>
                    <img src={icon3} alt="" />
                    <h1>Calender</h1>
                </NavLink>
            </div>

            <div className="flex flex-col gap-1">
                <h1 className="font-bold text-[12px]">Recruitment</h1>
                <NavLink to='/jobs' className={({ isActive }) => (isActive ? 'flex items-center gap-4 text-white rounded-lg p-2 bg-teal-600' : 'flex items-center gap-4 hover:text-white hover:bg-teal-600 rounded-lg p-2')}>
                    <img src={icon4} alt="" />
                    <h1>Jobs</h1>
                </NavLink>
                <NavLink to='/application' className={({ isActive }) => (isActive ? 'flex items-center gap-4 text-white rounded-lg p-2 bg-teal-600' : 'flex items-center gap-4 hover:text-white hover:bg-teal-600 rounded-lg p-2')}>
                    <img src={icon5} alt="" />
                    <h1>Application</h1>
                </NavLink>
                <NavLink to='/career' className={({ isActive }) => (isActive ? 'flex items-center gap-4 text-white rounded-lg p-2 bg-teal-600' : 'flex items-center gap-4 hover:text-white hover:bg-teal-600 rounded-lg p-2')}>
                    <img src={icon6} alt="" />
                    <h1>Career site</h1>
                </NavLink>
                <NavLink to='/referrals' className={({ isActive }) => (isActive ? 'flex items-center gap-4 text-white rounded-lg p-2 bg-teal-600' : 'flex items-center gap-4 hover:text-white hover:bg-teal-600 rounded-lg p-2')}>
                    <img src={icon7} alt="" />
                    <h1>My Referrals</h1>
                </NavLink>
            </div>

            <div className="flex flex-col gap-1">
                <h1 className="font-bold text-[12px]">Organization</h1>
                <NavLink to='/employee' className={({ isActive }) => (isActive ? 'flex items-center gap-4 text-white rounded-lg p-2 bg-teal-600' : 'flex items-center gap-4 hover:text-white hover:bg-teal-600 rounded-lg p-2')}>
                    <img src={icon8} alt="" />
                    <h1>Employee</h1>
                </NavLink>
                <NavLink to='/structure' className={({ isActive }) => (isActive ? 'flex items-center gap-4 text-white rounded-lg p-2 bg-teal-600' : 'flex items-center gap-4 hover:text-white hover:bg-teal-600 rounded-lg p-2')}>
                    <img src={icon9} alt="" />
                    <h1>Structure</h1>
                </NavLink>
                <NavLink to='/report' className={({ isActive }) => (isActive ? 'flex items-center gap-4 text-white rounded-lg p-2 bg-teal-600' : 'flex items-center gap-4 hover:text-white hover:bg-teal-600 rounded-lg p-2')}>
                    <img src={icon10} alt="" />
                    <h1>Report</h1>
                </NavLink>
                <NavLink to='/settings' className={({ isActive }) => (isActive ? 'flex items-center gap-4 text-white rounded-lg p-2 bg-teal-600' : 'flex items-center gap-4 hover:text-white hover:bg-teal-600 rounded-lg p-2')}>
                    <img src={icon11} alt="" />
                    <h1>Settings</h1>
                </NavLink>
                <NavLink to='/logout' className={({ isActive }) => (isActive ? 'flex items-center gap-4 text-white rounded-lg p-2 bg-teal-600' : 'flex items-center gap-4 hover:text-white hover:bg-teal-600 rounded-lg p-2')}>
                    <img src={icon12} alt="" />
                    <h1>logout</h1>
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
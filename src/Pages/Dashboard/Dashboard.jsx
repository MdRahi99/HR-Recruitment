import Jobs from "../Jobs/Jobs";
import Section1 from "./Section1";

const Dashboard = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row py-8 px-4">
            <div className="w-full lg:w-9/12">
                <Section1 />
            </div>
            <div className=" hidden lg:divider divider-horizontal lg:h-[90vh] bg-teal-200 lg:w-[6px] rounded-lg"></div>
            <div className="w-full lg:w-3/12">
                <Jobs />
            </div>
        </div>
    );
};

export default Dashboard;
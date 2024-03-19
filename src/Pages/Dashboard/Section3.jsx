import BarChart from "../../Components/BarChart";

const Section3 = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-2/3">
                <BarChart />
            </div>
            <div className="w-full lg:w-1/3 flex justify-center">
                
            </div>
        </div>
    );
};

export default Section3;
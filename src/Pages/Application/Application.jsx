import { useState } from "react";
import useCandidates from "../../Hooks/useCandidates";
import Loader from "../Shared/Loader/Loader";
import { IoSearch } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";

const Application = () => {

    const [candidates, shortlisted, rejected, isLoading, , , , candidatesByStatus, hold, process] = useCandidates();
    const [specificCandidateData, setSpecificCandidateData] = useState(candidates);
    if (isLoading) {
        return <Loader />
    }

    const handleClick = async (status) => {
        const data = await candidatesByStatus(status);
        setSpecificCandidateData(data);
    };

    return (
        <div className="w-full flex flex-col p-8 bg-teal-50 h-[100vh]">
            <h1 className="font-semibold text-[18px]">Application</h1>
            <p className="font-medium text-[14px] mt-6">On Going Recruitment</p>

            <div className="flex items-center justify-between bg-white p-4 my-6 rounded-lg h-20 lg:h-12">
                <div className="flex items-center gap-2 lg:gap-8 font-semibold">
                    <button className="hover:border-b-4 border-teal-600" onClick={() => handleClick('all')}>All <span>({candidates.length})</span></button>

                    <button className="hover:border-b-4 border-teal-600" onClick={() => handleClick('shortlisted')}>Shortlisted <span>({shortlisted.length})</span></button>

                    <button className="hover:border-b-4 border-teal-600" onClick={() => handleClick('process')}>In process <span>({process.length})</span></button>

                    <button className="hover:border-b-4 border-teal-600" onClick={() => handleClick('hold')}>On Hold <span>({hold.length})</span></button>
                    
                    <button className="hover:border-b-4 border-teal-600" onClick={() => handleClick('rejected')}>Rejected <span>({rejected.length})</span></button>
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    <h1 className="flex items-center gap-1"><IoSearch className="text-xl text-teal-600" /> <span className="font-semibold text-[14px]">Search</span></h1>
                    <h1 className="flex items-center gap-1"><CiFilter className="text-xl text-teal-600" /> <span className="font-semibold text-[14px]">Filter</span></h1>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                {specificCandidateData?.map(data => {
                    const { _id, name, status } = data;
                    return <div key={_id} className="flex items-center justify-between bg-white rounded-lg p-3 hover:bg-teal-100">
                        <div>
                            <img src="" alt="" />
                            <div>
                                <h1 className="font-semibold text-[16px]">{name}</h1>
                                <h3 className="font-medium text-[14px] text-gray-400">4 year exp. | Expected 25k</h3>
                            </div>
                        </div>
                        <h1 className="font-semibold text-[16px] text-teal-600 hover:text-black">{status.charAt(0).toUpperCase() + status.slice(1)}</h1>
                        <h1>14/12/2023</h1>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Application;
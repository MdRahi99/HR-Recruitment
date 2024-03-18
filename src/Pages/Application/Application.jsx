import { useState } from "react";
import useCandidates from "../../Hooks/useCandidates";
import Loader from "../Shared/Loader/Loader";

const Application = () => {

    const [candidates, shortlisted, rejected, isLoading, , , , candidatesByStatus] = useCandidates();
    const [specificCandidateData, setSpecificCandidateData] = useState(candidates);

    const handleClick = async (status) => {
        const data = await candidatesByStatus(status);
        setSpecificCandidateData(data);
    };

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="w-full flex flex-col py-8 px-4 bg-teal-50 h-[100vh]">
            <h1 className="font-semibold text-[18px]">Application</h1>
            <p className="font-medium text-[14px] mt-6">On Going Recruitment</p>

            <div>
                <div className="flex items-center gap-8 bg-white rounded-lg p-4 font-semibold my-6">
                    <button className={({ isActive }) => (isActive ? 'flex items-center gap-4 text-white rounded-lg p-2 bg-teal-600' : 'flex items-center gap-4 hover:text-white hover:bg-teal-600 rounded-lg p-2')} onClick={() => handleClick('all')}>All <span>({candidates.length})</span></button>
                    <button onClick={() => handleClick('shortlisted')}>Shortlisted <span>({shortlisted.length})</span></button>
                    <button onClick={() => handleClick('process')}>In process <span>(0)</span></button>
                    <button onClick={() => handleClick('hold')}>On Hold <span>(0)</span></button>
                    <button onClick={() => handleClick('rejected')}>Rejected <span>({rejected.length})</span></button>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                {specificCandidateData?.map(data => {
                    const { _id, name, status } = data;
                    return <div key={_id} className="flex items-center justify-between bg-white rounded-lg p-3 hover:bg-teal-200">
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
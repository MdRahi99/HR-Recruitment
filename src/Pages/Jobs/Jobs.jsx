import { Link } from "react-router-dom";
import useAllJobs from "../../Hooks/useAllJobs";
import Loader from "../Shared/Loader/Loader";

const Jobs = () => {

    const [jobs, isLoading] = useAllJobs();

    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <h1 className="font-semibold text-[24px] text-center mt-10">Welcome back XTZ</h1>
            <Link to='/add-job' className="p-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg mt-6 w-2/3 mx-auto flex items-center justify-center">+ Create New Job</Link>

            <h3 className="font-medium text-[14px] mt-16 mb-4 px-4">Recent Added Jobs</h3>

            <div className="flex flex-col gap-3 px-4">
                {
                    jobs.map(job => {
                        const { _id, title, applicants } = job;
                        return <div key={_id} className="flex items-center gap-5 bg-teal-100 hover:bg-teal-600 hover:text-white p-2 rounded">
                            <h1 className="font-semibold bg-teal-600 text-[14px] w-10 text-center p-2 text-white rounded">{applicants}</h1>
                            <div>
                                <h1 className="font-medium text-[14px]">{title}</h1>
                                <p className="font-light text-[12px]">Total Application</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Jobs;
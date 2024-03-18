import { Link } from "react-router-dom";
import error from "../../Assets/error.jpg";

const Error = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center mt-28">
                <img className="w-96 h-96 rounded-2xl" src={error} alt="" />
                <Link to='/' className="px-4 py-2 rounded-lg text-xl font-bold bg-orange-600 text-white w-2/3 lg:w-1/4 mt-10 hover:bg-orange-400 mx-auto text-center">Back</Link>
            </div>
        </>
    );
};

export default Error;
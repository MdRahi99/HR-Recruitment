import { IoSearch } from "react-icons/io5";

const Search = () => {
    return (
        <div className="flex relative items-center">
            <input type="text" placeholder="Search" className="input w-72 focus:outline-none bg-teal-100 h-8 focus:border-none" />
            <div className="p-2 absolute rounded-lg right-0 bg-teal-600 hover:bg-teal-400">
                <IoSearch className="text-white" />
            </div>
        </div>
    );
};

export default Search;
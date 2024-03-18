import useCandidates from "../../Hooks/useCandidates";

const Section2 = () => {

    const [candidates, shortlisted, rejected] = useCandidates();

    return (
        <div className="flex items-center justify-between p-6">
            <div>
                <h1 className="font-medium text-[14px]">Total Candidates</h1>
                <p className="font-bold text-[22px]">{candidates.length}</p>
            </div>
            <div>
                <h1 className="font-medium text-[14px]">Shortlisted Candidates</h1>
                <p className="font-bold text-[22px]">{shortlisted.length}</p>
            </div>
            <div>
                <h1 className="font-medium text-[14px]">Rejected Candidates</h1>
                <p className="font-bold text-[22px]">{rejected.length}</p>
            </div>
        </div>
    );
};

export default Section2;
/* eslint-disable react/prop-types */
const JobAddForm = ({ register, handleSubmit, onSubmit }) => {

    return (
        <div className='flex flex-col w-11/12 lg:w-2/3 mx-auto gap-8 lg:gap-16 mt-12 p-10 bg-[#e0f3ee] rounded-2xl'>
            <h1 className='text-xl rounded-xl text-center bg-[#b7e7da] font-playFair p-2 lg:p-4 w-full lg:w-80 uppercase mx-auto'>Add New Job</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col gap-4'
            >
                <input type="text" name="title" placeholder="Enter job title here" className="input w-full focus:outline-none focus:border-0 max-w-2xl mx-auto rounded-xl"
                    {...register("title", { required: true, maxLength: 100 })} />

                <textarea name="description" className="textarea focus:outline-none focus:border-0 w-full max-w-2xl mx-auto rounded-xl" placeholder="Enter job description here"
                    {...register("description", { required: true })}></textarea>

                <input type="text" name="location" placeholder="Enter job location here" className="input focus:outline-none focus:border-0 w-full max-w-2xl mx-auto rounded-xl"
                    {...register("location", { required: true })} />

                <input type="number" name="salary" placeholder="Enter job salary here" className="input focus:outline-none focus:border-0 w-full max-w-2xl mx-auto rounded-xl"
                    {...register("salary", { required: true })} />

                <input type="number" name="applicants" placeholder="Enter total job applicants number here" className="input focus:outline-none focus:border-0 w-full max-w-2xl mx-auto rounded-xl"
                    {...register("applicants", { required: true })} />

                <button className="btn btn-outline btn-accent w-full lg:w-80 mx-auto rounded-xl">Submit</button>
            </form>
        </div>
    );
};

export default JobAddForm;
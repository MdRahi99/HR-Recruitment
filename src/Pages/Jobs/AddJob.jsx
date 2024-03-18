import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import JobAddForm from '../../Components/JobAddForm';
import { useNavigate } from 'react-router-dom';
import useAllJobs from '../../Hooks/useAllJobs';

const AddJob = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const [, , refetch] = useAllJobs();

    const onSubmit = async (data) => {
        const { title, description, location, salary, applicants } = data;

        const newLists = { title, description, location, salary: parseFloat(salary), applicants: parseFloat(applicants) };

        axios.post('https://hr-recruitment-server.vercel.app/jobs/create-job', newLists)
            .then(data => {
                if (data.data.insertedId) {
                    reset();
                    Swal.fire({
                        title: 'Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    refetch();
                    navigate('/');
                }
            })
    }
    
    return (
        <JobAddForm
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit} />
    );
};

export default AddJob;
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useAllJobs = () => {

    const { refetch, isLoading, data: jobs = [] } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await axios.get('https://hr-recruitment-server.vercel.app/jobs')
            return res.data;
        }
    });

    return [jobs, isLoading, refetch]
};

export default useAllJobs;

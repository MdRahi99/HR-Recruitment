import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useCandidates = () => {

    const { refetch: refetchCandidates, isLoading: candidatesLoading, data: candidates = [] } = useQuery({
        queryKey: ['candidates'],
        queryFn: async () => {
            const res = await axios.get('https://hr-recruitment-server.vercel.app/candidates');
            return res.data;
        }
    });

    const { refetch: refetchShortlisted, isLoading: shortlistedLoading, data: shortlisted = [] } = useQuery({
        queryKey: ['shortlisted'],
        queryFn: async () => {
            const res = await axios.get('https://hr-recruitment-server.vercel.app/candidates/shortlisted');
            return res.data;
        }
    });

    const { refetch: refetchRejected, isLoading: rejectedLoading, data: rejected = [] } = useQuery({
        queryKey: ['rejected'],
        queryFn: async () => {
            const res = await axios.get('https://hr-recruitment-server.vercel.app/candidates/rejected');
            return res.data;
        }
    });

    const candidatesByStatus = async (status) => {
        try {
            const res = await axios.get(`https://hr-recruitment-server.vercel.app/candidates/${status}`);
            return res.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    const isLoading = candidatesLoading || shortlistedLoading || rejectedLoading;

    return [candidates, shortlisted, rejected, isLoading, refetchCandidates, refetchShortlisted, refetchRejected, candidatesByStatus];
};

export default useCandidates;

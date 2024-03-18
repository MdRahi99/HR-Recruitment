import axios from 'axios';
import { useEffect, useState } from 'react';

const useAllJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('https://hr-recruitment-server.vercel.app/jobs')
            .then(data => {
                setJobs(data.data)
                setIsLoading(false)
            })
            .catch(err => console.error(err))
    }, [])

    return [jobs, isLoading]
};

export default useAllJobs;
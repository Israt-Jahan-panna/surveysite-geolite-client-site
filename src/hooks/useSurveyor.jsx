import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAuth from './useAuth';

const useSurveyor = () => {
    const { user, loading } = useAuth();

    const { data: isSurveyor, isLoading: isSurveyorLoading } = useQuery({
        queryKey: ['isSurveyor', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            if (user?.email) {
                const res = await axios.get(`http://localhost:4200/users/surveyor/${user.email}`);
                console.log(res);
                return res.data.surveyor; // Use lower case "surveyor" here
            }
        },
    });

    return [isSurveyor, isSurveyorLoading];
};

export default useSurveyor;

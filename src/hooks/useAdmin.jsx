import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import axios from 'axios';


const useAdmin = () => {
    const { user, loading } = useAuth();
    
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            if (user?.email) {
                const res = await axios.get(`http://localhost:4200/users/admin/${ user.email }`);
                console.log(res);
                return res.data.admin;
            }
        },
    });
    return [isAdmin, isAdminLoading];
};

export default useAdmin;

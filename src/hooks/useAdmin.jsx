import React, { useContext } from 'react';
import useAxios from './useAxios';
import { AuthContext } from '../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user,loading} = useContext(AuthContext);
    const [axiosSecure] = useAxios();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/allUser/admin/${user?.email}`);
            return res.data.admin
            
        }
    })
    

    return [isAdmin, isAdminLoading]
};

export default useAdmin;
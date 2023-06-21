import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useSelectClass = () => {
    const {user,loading} = useContext(AuthContext);
    const [axiosSecure] = useAxios();
    // const token = localStorage.getItem('access-token')

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })

    return [cart, refetch]
};

export default useSelectClass;
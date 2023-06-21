import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
    const {user,loading} = useContext(AuthContext);
    const [axiosSecure] = useAxios();
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/allUser/instructor/${user?.email}`);
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;
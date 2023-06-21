import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import useInstructor from '../hooks/useInstructor';
import Progress from '../conponents/progress/Progress';

const InstructorRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthContext);
    const [isInstructor,isInstructorLoading]= useInstructor();
    if(loading || isInstructorLoading){
        return <Progress/>
    }
    if(user && isInstructor){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace />
};

export default InstructorRoute;
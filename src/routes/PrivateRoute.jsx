import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Progress from '../conponents/progress/Progress';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const  {loading , user} = useContext(AuthContext);
    if(loading){
        return <Progress/>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace />
};

export default PrivateRoute;
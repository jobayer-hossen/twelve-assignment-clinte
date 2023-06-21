import React, { useContext } from 'react';
import Progress from '../conponents/progress/Progress';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthContext);
    const [isAdmin,isAdminLoading]= useAdmin();
    if(loading || isAdminLoading){
        return <Progress/>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace />
};

export default AdminRoute;
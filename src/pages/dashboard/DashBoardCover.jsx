import React, { useContext } from 'react';
import Lottie from "lottie-react";
import coverAnimation from '../../../public/dash_cover/134261-dashboard-developer.json'
import { AuthContext } from '../../provider/AuthProvider';
const DashBoardCover = () => {
    const {user} = useContext(AuthContext);
    
    return (
        <>
        <h2 className='text-4xl text-center mt-8 mb-5'>Welcome {user?.displayName} At LensCraft Dashboard</h2>
           <div className='w-[45%] mx-auto '>
            <Lottie animationData={coverAnimation} loop={true} />
        </div>
        </>
    );
};

export default DashBoardCover;
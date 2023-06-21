import React from 'react';
import DashBoard from '../pages/dashboard/DashBoard';
import { Outlet } from 'react-router-dom';

const DashBoardLayout = () => {
    return (
        <div className='relative min-h-screen md:flex'>
            <div className=''>
            <DashBoard />
            </div>
            <div className='flex-1 mx-auto'>
                <div className=''>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;
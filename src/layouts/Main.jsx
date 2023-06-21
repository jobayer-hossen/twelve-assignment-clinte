import React from 'react';
import NavBar from '../conponents/shared/NavBar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../conponents/shared/Footer';

const Main = () => {
    const location = useLocation();
    const noNavbarFooter = location.pathname.includes('dashboard')
    // const noNavFoot = location.pathname.includes('')
    return (
        <div>
            { noNavbarFooter || <NavBar></NavBar> }
            <Outlet/>
            { noNavbarFooter || <Footer></Footer> }
        </div>
    );
};

export default Main;
import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { FaAddressCard ,FaHistory,FaBookReader,FaUsersCog,FaBookMedical, FaHome , FaSignInAlt ,FaEdit, FaClipboardCheck,FaMoneyCheckAlt} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import useAxios from '../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import useInstructor from '../../hooks/useInstructor';
import useTitle from '../../hooks/useTitle';


const DashBoard = () => {
    useTitle('Dashboard')
    const { user , logOutUser} = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const handleLogout = ()=>{
        logOutUser()
        .then()
        .catch(error => {console.error(error)});
      }
    return (
        <>
            <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-green-100 border-r rtl:border-r-0 rtl:border-l  ">
                <div className="flex justify-center items-center mx-auto">
                    <img className='w-[12%] logo' src="https://cdn-icons-png.flaticon.com/512/189/189410.png?w=740&t=st=1686113052~exp=1686113652~hmac=6f038c8492c3ccac79cad83dddf59ea74babdf84ca941ee4ab7c0e1be5e36a40" alt="" />
                    <p className='text-xl ms-4'>LensCraft</p>
                </div>

                <div className="flex flex-col items-center mt-6 -mx-2 ">
                    <img className="object-cover w-24 h-24 mx-2 rounded-full ring ring-success ring-offset-base-100 ring-offset-2" src={user?.photoURL} alt="avatar" />
                    <h4 className="mx-2 mt-2 font-medium text-gray-800 ">{user?.displayName}</h4>
                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600 ">
                    {
                        isAdmin ? "Admin" : isInstructor ? "Instructor" : "Student"
                    }</p>
                </div>

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>

                        { isInstructor && <NavLink to='/dashboard/addClass' className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 ray-800 -black hover:text-gray-700">
                            <span><FaBookMedical/></span>
                            <span className="mx-4 font-medium">Add class</span>
                        </NavLink>}
                        {isAdmin && <NavLink to='/dashboard/manageUser' className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 ray-800 -black hover:text-gray-700">
                            <span><FaUsersCog/></span>
                            <span className="mx-4 font-medium">Manage User</span>
                        </NavLink>}

                        {isAdmin || isInstructor|| <NavLink to='/dashboard/mySelectedClass' className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 ray-800 -black hover:text-gray-700">
                        <span><FaClipboardCheck/></span>
                            <span className="mx-4 font-medium">My Selected Class</span>
                        </NavLink>}
                        {isInstructor && <NavLink to='/dashboard/myClasses' className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 ray-800 -black hover:text-gray-700">
                        <span><FaAddressCard/></span>
                            <span className="mx-4 font-medium">My Class</span>
                        </NavLink>}
                        { isAdmin && <NavLink to='/dashboard/manageClass' className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 ray-800 -black hover:text-gray-700">
                        <span><FaEdit/></span>
                            <span className="mx-4 font-medium">Manage Class</span>
                        </NavLink>}
                        {isAdmin||isInstructor||<NavLink to='/dashboard/myEnrolledClass' className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 ray-800 -black hover:text-gray-700">
                        <span><FaBookReader/></span>
                            <span className="mx-4 font-medium">My Enrolled Class</span>
                        </NavLink>}
                        {isAdmin||isInstructor||<NavLink to='/dashboard/paymentHistory' className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 ray-800 -black hover:text-gray-700">
                        <span><FaHistory/></span>
                            <span className="mx-4 font-medium">Payment History</span>
                        </NavLink>}
                        {/* ------------------------------- */}
                        <div className="divider"></div>
                        <NavLink to='/' className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 ray-800 -black hover:text-gray-700">
                        <span><FaHome/></span>
                            <span className="mx-4 font-medium">Home</span>
                        </NavLink>
                        <button onClick={handleLogout} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 ray-800 -black hover:text-gray-700">
                        <span><FaSignInAlt/></span>
                            <span className="mx-4 font-medium">Sign Out</span>
                        </button>
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default DashBoard;
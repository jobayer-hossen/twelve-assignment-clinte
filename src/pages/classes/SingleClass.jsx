import React, { useContext } from 'react';
import { FaUserGraduate ,FaClipboardList } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import useAxios from '../../hooks/useAxios';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import useInstructor from '../../hooks/useInstructor';

const SingleClass = ({classes}) => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const [axiosSecure] = useAxios();

    const {availableSeats,price,image,name,instructor,_id} = classes;

    const handleSelect =(classes)=>{
        
        if(user && user.email){
           
            const userEnrollInformation = {classId:_id,price,availableSeats,name,image,instructor,email:user.email} 
            axiosSecure.post(`/selectedClass`,userEnrollInformation )
            .then(res => {
                if(res.data){
                    Swal.fire(
                        'Good job!',
                        'These class selected successfully ',
                        'success'
                      )
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please Login First',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login')
                  
                }
              })
        }
    }
    return (
        <>
            <div className= "max-w-xs mt-5 overflow-hidden bg-green-100 rounded-lg shadow-lg ">
                                    <div className="px-4 py-2">
                                        <h1 className="text-xl font-bold text-gray-800 uppercase ">{classes?.name}</h1>
                                        <p className="mt-1 flex text-sm text-gray-600 "> <FaUserGraduate className=' mr-1' /> Instructor : {classes?.instructor}</p>
                                        <p className="mt-1 flex text-sm text-gray-600 ">
                                        <FaClipboardList className=' mr-1' />
                                            Available Seats : {classes?.availableSeats}</p>
                                    </div>

                                    <img className="object-cover rounded w-full h-48 mt-2" src={classes?.image} alt="class" />

                                    <div className="flex items-center justify-between px-4 py-2 bg-green-100">
                                        <h1 className="text-lg font-bold text-black">${classes?.price}</h1>
                                       {isAdmin || isInstructor || classes?.availableSeats === 0 ? 
                                        <button 
                                        disabled
                                         className="btn btn-sm text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-red-500 rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Select</button>
                                       
                                        :
                                        <Link >
                                        <button 
                                        onClick={()=>handleSelect(classes)} 
                                         className="btn btn-sm text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-green-500 rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Select</button>
                                        </Link>
                                    }
                                    </div>
            </div>
        </>
    );
};

export default SingleClass;
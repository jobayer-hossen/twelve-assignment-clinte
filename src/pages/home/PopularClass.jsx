import React from 'react';
import useAllClass from '../../hooks/useAllClass';
import { FaUserGraduate, FaClipboardList } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

const PopularClass = () => {
    const [allClass] = useAllClass();
    return (
        <>

          
            
            <section className='mt-5'>
                <div className="container w-[90%] px-6 m-auto">
                <Fade bottom>
                    <h2 className="text-4xl mt-2 text-center ">Our <span className='text-green-600'>Popular </span> Class</h2>
                    <p className='lg:w-[60%] sm:w-[20%] text-center mx-auto mt-5 mb-10'>Unleash Your Creative Eye in Our Popular Photography Class. Master the art of composition, lighting, editing, and storytelling to capture stunning images that leave a lasting impression.</p>
                    </Fade>
                    <Fade bottom>
                    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
                        {
                            allClass.slice(0, 6).map(classes =>
                                <div key={classes._id} className="max-w-xs mt-5 overflow-hidden bg-green-100 rounded-lg shadow-lg ">
                                    <div className="px-4 py-2">
                                        <h1 className="text-xl font-bold text-gray-800 uppercase ">{classes?.name}</h1>
                                        <p className="mt-1 flex text-sm text-gray-600 "> <FaUserGraduate className=' mr-1' /> Instructor : {classes?.instructor}</p>
                                        <p className="mt-1 flex text-sm text-gray-600 ">
                                            <FaClipboardList className=' mr-1' />
                                            Available Seats : {classes?.availableSeats}</p>
                                    </div>

                                    <img className="object-cover rounded w-full h-48 mt-2" src={classes?.image} alt="class" />

                                    <div className="flex items-center justify-between px-4 py-2 bg-green-100">
                                        <h1 className="text-lg mx-auto font-bold text-black">${classes?.price}</h1>
                                        {/* <Link >
                                        <button 
                                        onClick={()=>handleSelect(classes)} 
                                        // disabled={isAdmin}
                                         className="btn text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-green-500 rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Select</button>
                                        </Link> */}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    </Fade>
                </div>
            </section>
           
        </>
    );
};

export default PopularClass;
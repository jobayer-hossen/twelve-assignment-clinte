import React, { useContext } from 'react';
import useAxios from '../../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';


const MyClasses = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxios();
    const { data: myClass = [], refetch } = useQuery(['myClass'], async () => {
        const res = await axiosSecure.get(`/addClass/${user?.email}`)
        return res.data;
    });
    console.log(myClass)
    return (
        <>
       <section className="w-[95%] mx-auto">
                <h2 className="text-3xl mt-5 text-black text-center ">My Class</h2>
                <div className="flex flex-col mt-6">
                    <div className="-mx-6 -my-2 overflow-x-auto">
                        <div className="inline-block min-w-full py-2 align-middle px-1">
                            <div className="overflow-hidden border border-green-400  md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 ">
                                    <thead className="bg-green-100 ">
                                        <tr>
                                            <th scope="col" className="px-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                <span>Image</span>
                                            </th>
                                            <th scope="col" className="px-22 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                <span>Class Name</span>
                                            </th>
                                            <th scope="col" className="py-3.5 px-2 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                <div className="flex items-center gap-x-3">
                                                    <span>Enrolled Students</span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-22 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                <span>Price</span>
                                            </th>
                                            <th scope="col" className="px-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">Status</th>

                                            <th scope="col" className="px-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">Feedback</th>

                                            {/* <th scope="col" className="px-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">Feedback</th> */}

                                            <th scope="col" className="px-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">Update Class</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200  ">

                                        {
                                            myClass.map(classes =>
                                                <tr key={classes?._id}>
                                                    <td className="px-2 py-4 text-sm font-medium text-gray whitespace-nowrap">
                                                        <div className="inline-flex items-center gap-x-3">
                                                            <div className="flex items-center gap-x-2">
                                                                <img className="object-cover w-10 h-10 rounded" src={classes.image} alt="" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-2 py-4 text-sm font-medium text-gray whitespace-nowrap">
                                                        <h2 className="text-sm font-normal text-gray-500">{classes?.className}</h2>
                                                    </td>
                                                    <td className="px-2 py-4 text-sm text-gray-500 whitespace-nowrap">5</td>
                                                    <td className="px-2 py-4 text-sm text-gray-500 whitespace-nowrap">${classes?.price}</td>
                                                    
                                                    <td className="px-2 py-4 text-sm text-gray-500 whitespace-nowrap">{classes?.status || 'pending'}</td>
                                                    <td className="px-2 py-4 text-sm text-gray-500 whitespace-nowrap">{classes?.feedback || ''}</td>





                                                    <td className="px-2 py-4 text-sm whitespace-nowrap">
                                                        <div className="flex items-center gap-x-6">
                                                            {/* {
                                                                classes.status === "approved" || classes.status === "denied" ? <button
                                                                    className="btn btn-xs bg-green-400 text-gray-700"
                                                                    disabled
                                                                >
                                                                    Approve
                                                                </button> : <button
                                                                    className="btn btn-xs bg-green-400  text-gray-700 "
                                                                    onClick={() => handleApproved(classes)}
                                                                >
                                                                    Approve
                                                                </button>
                                                            } */}

                                                            {/* {
                                                                classes.status === "denied" || classes.status === "approved" ? <button
                                                                    className="btn btn-xs bg-green-400 text-gray-700"
                                                                    disabled
                                                                >
                                                                    Deny
                                                                </button> : <button
                                                                    className="btn btn-xs bg-green-400  text-gray-700 "
                                                                    onClick={() => handleDenied(classes)}
                                                                >
                                                                    Deny
                                                                </button>
                                                            } */}
                                                           <Link to={`/dashboard/myClasses/update/${classes._id}`} >
                                                           <button
                                                           className="btn btn-xs bg-green-400  text-gray-700 ">Update</button>
                                                           </Link>

                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }



                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>     
        </>
    );
};

export default MyClasses;
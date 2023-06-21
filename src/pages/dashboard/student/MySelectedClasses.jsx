import React, { useContext } from 'react';
import useAxios from '../../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt ,FaWallet} from "react-icons/fa";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const MySelectedClass = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxios();
    const { data: selectedClass = [], refetch } = useQuery(['selectedClass'], async () => {
        const res = await axiosSecure.get(`/getSelectedClass/${user?.email}`)
        return res.data;
    });
   
    const handleDeleteClass = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/getSelectedClass/${id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your selected class has been deleted !',
                                'success'
                            )
                        }
                    })

            }
        })
    }


    return (
        <>
             <section className="w-[95%] mx-auto">
             <h2 className="text-3xl mt-5 text-black text-center ">My Selected Classes</h2>       
                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto">
                        <div className="inline-block min-w-full py-2 align-middle px-1">
                            <div className="overflow-hidden border border-green-400  md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 ">
                                    <thead className="bg-green-100 ">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                <div className="flex items-center gap-x-3">
                                                    <span>Photo</span>
                                                </div>
                                            </th>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                <div className="flex items-center gap-x-3">
                                                    <span>Name</span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                            <span>Instructor</span>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                <span>Price</span>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">Email address</th>

                                            {/* <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 00">Teams</th> */}

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200  ">
                    {
                        selectedClass.map(selectClass=>
                            <tr key={selectClass._id}>
                                            <td className="px-4 py-4 text-sm font-medium text-gray whitespace-nowrap">
                                                <div className="inline-flex items-center gap-x-3">
                                                    <div className="flex items-center gap-x-2">
                                                        <img className="object-cover w-10 h-10 rounded" src={selectClass?.image} alt="" />
                                                        
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                            <div>
                                                            <h2 className="font-medium text-gray-800 ">{selectClass?.name}</h2>
                                                        </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{selectClass.instructor}</td>
                                            <td className="px-4 py-4 text-sm font-medium text-gray whitespace-nowrap">
                                                    <h2 className="text-sm font-normal text-emerald-500">${selectClass?.price}</h2>
                                                
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{selectClass.email}</td>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                <div className="flex items-center gap-x-6">
                                                    <button
                                                    onClick={()=>handleDeleteClass(selectClass._id)}
                                                    className="text-gray-500 transition-colors duration-200 red-500 hover:text-red-500 focus:outline-none">
                                                        <FaTrashAlt className='mx-auto'/>
                                                        Delete
                                                    </button>
                                                <Link to={`/dashboard/goPayment/${selectClass._id}`}>
                                                    <button
                                                    className="text-gray-500 transition-colors duration-200 yellow-500 hover:text-green-500 focus:outline-none">
                                                    <FaWallet className='mx-auto'/>
                                                    Pay   
                                                    </button>
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

export default MySelectedClass;
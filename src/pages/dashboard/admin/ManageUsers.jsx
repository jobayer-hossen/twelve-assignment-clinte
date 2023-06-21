import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaUserShield, FaUserGraduate } from "react-icons/fa";
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const [axiosSecure] = useAxios();

    const { data: allUser = [], refetch } = useQuery(['allUser'], async () => {
        const res = await axiosSecure.get('/allUser')
        return res.data;
    });

    const handleAdmin = (user) => {
        fetch(`https://twelve-assignment-server-indol.vercel.app/allUser/admin/${user?._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: 'Are you sure?',
                    text: `${user?.name} Make Admin ?`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, i am sure !'
                }).then((result) => {
                    if (result.isConfirmed) {
                        if (data.modifiedCount) {
                            refetch();
                            Swal.fire(
                                'Good job!',
                                `${user?.name} is an Admin Now !`,
                                'success'
                            )
                        }
                    }
                })

            })
    };

    const handleInstructor = (user) => {
        fetch(`https://twelve-assignment-server-indol.vercel.app/allUser/instructor/${user?._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: 'Are you sure?',
                    text: `${user?.name} Make instructor ?`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, i am sure !'
                }).then((result) => {
                    if (result.isConfirmed) {
                        if (data.modifiedCount) {
                            refetch();
                            Swal.fire(
                                'Good job!',
                                `${user?.name} is an Instructor Now !`,
                                'success'
                            )
                        }
                    }
                })

            })
    };
    return (
        <>
            <section className="w-[95%] mx-auto">
                <h2 className="text-3xl mt-5 text-black text-center ">Manage User Page</h2>
                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto">
                        <div className="inline-block min-w-full py-2 align-middle px-1">
                            <div className="overflow-hidden border border-green-400  md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 ">
                                    <thead className="bg-green-100 ">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                <div className="flex items-center gap-x-3">
                                                    <span>Image</span>
                                                </div>
                                            </th>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                <div className="flex items-center gap-x-3">
                                                    <span>Name</span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                <span>Role</span>
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">Email address</th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">Make</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200  ">
                                        {
                                            allUser.map(user =>
                                                <tr key={user?._id} >
                                                    <td className="px-2 py-4 text-sm font-medium text-gray whitespace-nowrap">
                                                        <div className="inline-flex items-center gap-x-3">
                                                            <div className="flex items-center gap-x-2">
                                                                <img className="object-cover w-10 h-10 rounded" src={user?.photo} alt="" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray whitespace-nowrap">
                                                        <div className="inline-flex items-center gap-x-3">
                                                            <div className="flex items-center gap-x-2">
                                                                <div>
                                                                    <h2 className="font-medium text-gray-800 ">{user?.name}</h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-12 py-4 text-sm font-medium text-gray whitespace-nowrap">
                                                        <h2 className="text-sm font-normal text-emerald-500 uppercase">{user?.role || 'student'}</h2>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{user?.email}</td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                        <div className="flex items-center gap-x-6">
                                                            {
                                                                user?.role === 'instructor' || user?.role === 'admin' ? <button
                                                                    className="btn btn-xs bg-green-400 text-gray-700"
                                                                    disabled
                                                                >
                                                                    <FaUserGraduate className='mx-auto text-lg' />
                                                                    Instructor
                                                                </button> : <button
                                                                    className="btn btn-xs bg-green-400  text-gray-700 "
                                                                    onClick={() => handleInstructor(user)}
                                                                >
                                                                    <FaUserGraduate className='mx-auto text-lg' />
                                                                    Instructor
                                                                </button>
                                                            }
                                                            {
                                                                user?.role === 'admin' || user?.role === 'instructor' ? <button
                                                                    className="btn btn-xs bg-green-400 text-gray-700"
                                                                    disabled
                                                                >
                                                                    <FaUserShield className='mx-auto text-lg' />
                                                                    Admin
                                                                </button> : <button
                                                                    className="btn btn-xs bg-green-400  text-gray-700 "
                                                                    onClick={() => handleAdmin(user)}
                                                                >
                                                                    <FaUserShield className='mx-auto text-lg' />
                                                                    Admin
                                                                </button>
                                                            }
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

export default ManageUsers;
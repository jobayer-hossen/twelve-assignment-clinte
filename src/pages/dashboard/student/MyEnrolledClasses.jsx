import React, { useContext } from 'react';
import useAxios from '../../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../provider/AuthProvider';

const MyEnrolledClasses = () => {
    const [axiosSecure] = useAxios();
    const {user} = useContext(AuthContext);
    const { data: successfullyPayClass = [], refetch } = useQuery(['successfullyPay'], async () => {
        const res = await axiosSecure.get(`/successfullyPay/${user?.email}`)
        return res.data;
    });

    return (
        <>
            <section className="w-[95%] mx-auto">
                <h2 className="text-3xl mt-5 text-black text-center ">My Enrolled Classes</h2>
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

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200  ">
                                        {
                                            successfullyPayClass.map(payClass =>
                                                <tr key={payClass._id}>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray whitespace-nowrap">
                                                        <div className="inline-flex items-center gap-x-3">
                                                            <div className="flex items-center gap-x-2">
                                                                <img className="object-cover w-10 h-10 rounded" src={payClass?.image} alt="" />

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <h2 className="font-medium text-gray-800 ">{payClass?.name}</h2>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{payClass.instructor}</td>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray whitespace-nowrap">
                                                        <h2 className="text-sm font-normal text-emerald-500">${payClass?.price}</h2>

                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{payClass.email}</td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                        <span className="inline-flex items-center justify-center gap-1 rounded-full bg-emerald-500 px-1.5 text-sm text-white">
                                                        Payment Success
                                                        </span>
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

export default MyEnrolledClasses;
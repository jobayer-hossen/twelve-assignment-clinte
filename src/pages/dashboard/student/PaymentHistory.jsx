import React from 'react';
import useAxios from '../../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const PaymentHistory = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxios();
    const { data: enroll = [], refetch } = useQuery(['enroll'], async () => {
        const res = await axiosSecure.get(`/enroll/${user?.email}`)
        return res.data;
    });
    
    // console.log(enroll)
    return (
    <>
      <section className="w-[95%] mx-auto">
      <h2 className="text-3xl mt-5 text-black text-center ">Payment History Page</h2>
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
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                            <span>Name</span>
                                            </th>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                <div className="flex items-center gap-x-3">
                                                    <span>Transaction id</span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                            <span>Price</span>
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">Email</th>

                                            {/* <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 00">Teams</th> */}

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200  ">
                         {
                            enroll.map(allEnroll =>
                                <tr key={allEnroll._id}>
                                    <td className="px-4 py-4 text-sm font-medium text-gray whitespace-nowrap">
                                                <div className="inline-flex items-center gap-x-3">
                                                    <div className="flex items-center gap-x-2">
                                                        <img className="object-cover w-10 h-10 rounded" src={allEnroll?.image} alt="" />
                                                        
                                                    </div>
                                                </div>
                                            </td>
                                    <td className="px-4 py-4 text-sm font-medium text-gray whitespace-nowrap">{allEnroll?.name}
                                    </td>
                                    <td className="px-4 py-4 text-sm font-medium text-gray whitespace-nowrap">{allEnroll?.transactionId}
                                    </td>
                                    <td className="px-4 py-4 text-sm font-medium text-gray whitespace-nowrap">${allEnroll?.price}
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{allEnroll?.email}</td>
                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                    {allEnroll?.date}
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

export default PaymentHistory;
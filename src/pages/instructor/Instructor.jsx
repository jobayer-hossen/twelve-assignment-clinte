import React from 'react';
import useTitle from '../../hooks/useTitle';
import useAxios from '../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Fade from 'react-reveal/Fade';

const Instructor = () => {
    useTitle('Instructor')
    const [axiosSecure] = useAxios();
    const { data: allInstructor = [], refetch } = useQuery(['allInstructor'], async () => {
        const res = await axiosSecure.get('/allInstructor')
        return res.data;
    });
    return (
        <>
            <section className='mt-10'>
                <div className="container w-[90%] px-6 m-auto">
                    <Fade bottom>
                    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
                        {
                            allInstructor.map(instructor =>
                                <div class="w-full max-w-xs overflow-hidden bg-green-100 rounded-lg shadow-lg ">
                                <img class="object-cover w-full h-56" src={instructor.image} alt="avatar"/>
                            
                                <div class="py-5 text-center">
                                    <p class="block text-xl text-gray-800 ">{instructor.name}</p>
                                    <span class="text-sm text-gray-700 ">{instructor.email}</span>
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

export default Instructor;
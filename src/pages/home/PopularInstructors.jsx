import React from 'react';
import useAxios from '../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Fade from 'react-reveal/Fade';

const PopularInstructors = () => {
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
                    <h2 className="text-4xl mt-2 text-center ">Our <span className='text-green-600'>Popular </span> Instructor</h2>
                    <p className='lg:w-[60%] sm:w-[20%] text-center mx-auto mt-5 mb-10'>Unleash your creativity with Our Popular Photography Instructor. Join transformative classes, learn composition, lighting, storytelling, and more. Elevate your skills under expert guidance and join a thriving community of aspiring photographers. Enroll now !</p>
                    </Fade>
                    <Fade bottom>
                    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
                        {
                            allInstructor.slice(0, 6).map(instructor =>
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

export default PopularInstructors;
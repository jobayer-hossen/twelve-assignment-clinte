import React from 'react';
import { useForm } from 'react-hook-form';
import Lottie from "lottie-react";
import feedbackAnimation from '../../../../public/feedback/99549-review-ratings.json'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';


const FeedbackModal = () => {
    const classData = useLoaderData();
    const [axiosSecure] = useAxios();
    const navigate = useNavigate();
    const { _id, className, instructorName } = classData;
    console.log(className
    )
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data.feedback)
        const feedback = { feedback: data.feedback }
        // console.log(feedback)
        axiosSecure.post(`/addClass/feedback/${_id}`, feedback)
            .then(data => {
                if (data) {
                    reset();
                    Swal.fire(
                        'Your feedback has been added !',
                        'Thanks for denied class feedback !',
                        'success'
                    )
                    navigate('/dashboard/manageClass')
                }
            })
    }
    return (
        <>
            <h2 className="text-3xl mt-5 text-black text-center "> <span className='text-green-600'>{instructorName} </span> Class Feedback</h2>
            <div className='container grid grid-cols-2 mt-20'>


                <form onSubmit={handleSubmit(onSubmit)} className="modal-box bg-green-100 mx-auto mt-20">
                    {/* <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
                    <h3 className=" text-lg text-center">Write a Feedback for <span className='text-green-600' >{className}</span> class !</h3>

                    <div className='relative' >
                        <textarea
                            {...register("feedback", { required: true })}
                            id="id-l03"
                            type="text"
                            name="feedback"
                            rows="3"
                            placeholder="Write your message"
                            className="peer relative w-full rounded border border-slate-200 p-4 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        ></textarea>

                    </div>
                    <button type='submit' className="w-[100%] mt-3 inline-flex items-center justify-center h-10 gap-2 px-4 font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                        <span>Send Feedback</span>
                    </button>
                </form>

                <div className='w-[80%] mx-auto'>
                    <Lottie animationData={feedbackAnimation} loop={true} />

                </div>

            </div>

        </>
    );
};

export default FeedbackModal;
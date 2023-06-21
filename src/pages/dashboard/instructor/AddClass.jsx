import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../provider/AuthProvider';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';

const imageToken = import.meta.env.VITE_imageBB_Token;

const imageURLApi = `https://api.imgbb.com/1/upload?key=${imageToken}`

const AddClass = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure]=useAxios()
    const { register, handleSubmit, reset } = useForm();

    const addClass= (data) =>{

        const formData = new FormData();
        formData.append('image', data.image[0])
        // console.log(data.image[0]);
        fetch(imageURLApi, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imageURL = imgResponse.data.display_url;
                const {className , instructorName , instructorEmail , price , seat} = data;
                const addNewClass = {className, price: parseFloat(price),  seat, image:imageURL,instructorName ,instructorEmail};
                axiosSecure.post('/addClass',addNewClass)
                .then(data => {
                    if(data.data.insertedId){
                        reset();
                        Swal.fire(
                            'Your Class Was Pending Successfully !',
                            'Congratulation !',
                            'success'
                        )
                    }
                })
            }
        })
        
    }

    return (
        <>
            <section className="max-w-4xl mt-7 p-6 mx-auto bg-green-100 rounded-md shadow-md">
                <h2 className="text-3xl text-black text-center ">Add a Class</h2>

                <form onSubmit={handleSubmit(addClass)}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-black" >Class Name</label>
                            <input 
                             {...register("className", { required: true})}
                             type="text" className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md focus:border-green-400 focus:ring-green-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                        </div>

                        <div>
                        <label className="text-black" >Class Image</label>

                            <input type="file" {...register("image", { required: true })}className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-green-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full y-200  placeholder-gray-400/70 ray-500 focus:border-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-40 " />
                        </div>

                        <div>
                            <label className="text-black" >Instructor Name</label>
                            <input 
                            {...register("instructorName", { required: true})}
                             defaultValue={user?.displayName} readOnly type="text" className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md focus:border-green-400 focus:ring-green-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-black" >Instructor Email</label>
                            <input
                            {...register("instructorEmail", { required: true})}
                            defaultValue={user?.email} type="email" readOnly className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md focus:border-green-400 focus:ring-green-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-black" >Available Seats</label>
                            <input
                            {...register("seat", { required: true})}
                             type="number" className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md focus:border-green-400 focus:ring-green-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-black" >Price</label>
                            <input 
                            {...register("price", { required: true})}
                            type="number" className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md focus:border-green-400 focus:ring-green-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button type='submit' className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Add</button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default AddClass;
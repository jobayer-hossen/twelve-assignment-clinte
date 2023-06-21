import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import useAxios from '../../../hooks/useAxios';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const UpdateClass = () => {
    const getClass = useLoaderData();
    const {user} = useContext(AuthContext);
    const [axiosSecure]=useAxios()
    const { register, handleSubmit, reset } = useForm();

    // console.log(getClass)
    const classUpdate= (data) =>{

                const { price , className} = data;
                const updateClassData = { price: parseFloat(price),  className};
                // console.log(addNewClass)
                axiosSecure.patch(`/updateClass/${getClass._id}`,updateClassData)
                .then(data => {
                    if(data.data){
                        reset();
                        Swal.fire(
                            'Your class update !',
                            'Congratulation !',
                            'success'
                        )
                    }
                })
            
        }
        
    
    return (
    <>
    <section className="max-w-4xl mt-7 p-6 mx-auto bg-green-50 rounded-md shadow-md">
                <h2 className="text-3xl text-black text-center ">Update <span className='text-green-700'>{getClass.className}</span> Class</h2>

                <form onSubmit={handleSubmit(classUpdate)}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-black" >Class Name</label>
                            <input 
                             {...register("className", { required: true})}
                            type="text" className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md focus:border-green-400 focus:ring-green-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-black" >Price</label>
                            <input 
                            {...register("price", { required: true})}
                            type="number" className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md focus:border-green-400 focus:ring-green-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                        </div>
                        <div>

                            <label className="text-black" >Instructor Name</label>
                            <input 
                             defaultValue={user?.displayName} readOnly type="text" className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md focus:border-green-400 focus:ring-green-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-black" >Instructor Email</label>
                            <input
                            defaultValue={user?.email} type="email" readOnly className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md focus:border-green-400 focus:ring-green-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button type='submit' className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Update</button>
                    </div>
                </form>
            </section>        
    </>
    );
};

export default UpdateClass;
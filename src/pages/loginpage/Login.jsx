import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye , FaEyeSlash} from "react-icons/fa";
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login')
    const {googleLogin,emailSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { handleSubmit , register, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        emailSignIn(data.email , data.password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            reset();
            navigate(from, { replace: true });
            Swal.fire(
                'Successfully Logged!',
                'Congratulation !',
                'success'
              )
        })
        .catch(error=>console.error(error))
    };


    const handleGoogle =() =>{
        googleLogin()
        .then(result=>{
                const saveUserInfo = {photo : result.user.photoURL, name: result.user.displayName, email: result.user.email }
                fetch('https://twelve-assignment-server-indol.vercel.app/addUser', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUserInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            Swal.fire(
                                'Google login Successfully !',
                                'Your Google account login Successfully !',
                                'success'
                            )
                            navigate(from, { replace: true })
                        }
                    })
            
        })
        .catch(error =>console.error(error))
    }
    const [visible , setVisible] = useState(false)
    const handlePassword =()=>{
        setVisible(!visible);
    }
    return (
        <>
            <div className='grid lg:grid-cols-2 mt-7'>

            <div>
                <img className='w-[70%] mx-auto rounded' src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7892.jpg?w=740&t=st=1686428822~exp=1686429422~hmac=a384969c933842bb6b9b789e135b186c777488a28720e965a94d342badb946c9" alt="" />
                </div>
                  
                        <div className="w-full max-w-sm p-6 m-auto mx-auto bg-green-100 shadow-md rounded">
                            <div className="flex justify-center items-center mx-auto">
                                <img className='w-[13%] logo-two' src="https://cdn-icons-png.flaticon.com/512/189/189410.png?w=740&t=st=1686113052~exp=1686113652~hmac=6f038c8492c3ccac79cad83dddf59ea74babdf84ca941ee4ab7c0e1be5e36a40" alt="" />
                                <p className='text-xl ms-4'>Login Your Account</p>
                            </div>

                            <form  onSubmit={handleSubmit(onSubmit)} className="mt-6">
                                <div>
                                    <label htmlFor="username" className="block text-sm text-gray-800 ">Your Email</label>
                                    <input {...register("email", { required: true })}  type="email" name="email" placeholder="type your email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-green-400  focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className="mt-4">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm text-gray-800 ">Password</label>
                                    </div>

                                  <div className='flex relative'>
                                  <input
                                  type={visible ? 'text' : 'password'}
                                  {...register("password", {
                                    minLength: 6,
                                    required: true,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="type your password"  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-green-400  focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                   /> 
                                     <span  className='mt-6 ms-2'>
                                { visible ?
                                    <FaEye className='text-green-400' onClick={handlePassword} /> 
                                    :
                                    <FaEyeSlash onClick={handlePassword}/>
                                    
                                    }
                                </span>
                                  </div>
                                    
                                </div>
                                <span className='mt-4 mb-2'>
                                {errors.email?.type === 'required' && <p className="text-red-600">Email is required</p>}
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case , one number and one special character !!</p>}
                                </span>

                                <div className="mt-6">
                                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50">
                                        Log In
                                    </button>
                                </div>
                            </form>

                            <div className="flex items-center justify-between mt-4">
                                <span className="w-1/5 border-b lg:w-1/5"></span>

                                <p className="text-xs text-center text-gray-500 ">
                                    OR LOGIN WITH SOCIAL MEDIA
                                </p>

                                <span className="w-1/5 border-b  lg:w-1/5"></span>
                            </div>

                            <div className="flex items-center mt-6 -mx-2">
                                <button onClick={handleGoogle} type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                                    <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                                        </path>
                                    </svg>

                                    <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                                </button>
                            </div>

                            <p className="mt-8 text-xs text-center text-gray-700"> Don't have an account? <Link to='/resister' className="font-medium text-gray-700  hover:underline hover:text-green-400">Create One</Link></p>
                        </div>
            
            
                    </div>
               
            
        </>
    );
};

export default Login;
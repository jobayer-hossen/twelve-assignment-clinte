import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';

const stripeSecretePromise = loadStripe(import.meta.env.VITE_STRIPE_SECRETE_PK);

const Payment = () => {
    const selectClass = useLoaderData();
    const {image , name , price} = selectClass;
    // console.log(selectClass)
    

   
    return (
        <>
        <h2 className="text-3xl mt-2 text-black text-center ">My Selected Classes Payment Page</h2> 
            <div className="max-w-4xl w-[50%] p-6 mx-auto bg-green-100 rounded-md shadow-md">
                {/*  <!-- Image --> */}
                <figure>
                    <img
                        src={image}
                        alt="card image"
                        className="aspect-video w-[80%] mx-auto"
                    />
                </figure>
                {/*  <!-- Body--> */}
                <div className="p-2">
                    <header className="mb-4 text-center">
                        <h3 className="text-xl font-medium text-slate-700">
                           {name }
                        </h3>
                        <p className=" text-slate-400">${price}</p>
                    </header>
                </div>
                {/*  <!-- Action base sized basic button --> */}
                <div className=" w-[100%] mx-auto">

                    <Elements stripe={stripeSecretePromise}>
                        <CheckoutForm selectClass={selectClass} ></CheckoutForm>
                    </Elements>

                    {/* <button className="">
                        <span>Order now!</span>
                    </button> */}
                </div>
            </div>
        </>
    );
};

export default Payment;
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';

const CheckoutForm = ({selectClass}) => {
   
    const [axiosSecure] = useAxios();
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useContext(AuthContext);
    const [paymentCardError, setPaymentCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [loading, setLoading] = useState(false);
    const [transaction ,setTransaction ] = useState('')
    const {image , name , _id, instructor ,price,classId,availableSeats} = selectClass;
    console.log(selectClass);

    useEffect(()=>{
            axiosSecure.post('/createPayment' , {price})
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
    },[])
    
console.log(paymentCardError.message );
    const handleSubmit = async (event) =>{
        event.preventDefault();

        if (!stripe || !elements) {
            return
        };

        const cardElement = elements.getElement(CardElement);

        if (cardElement === null) {
           return
        };
        
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement
        });

        if ( error ) {
            
            setPaymentCardError(error.message);
        }else {
          
            setPaymentCardError('');
        };

        setLoading(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: user?.displayName || 'anonymous user',
                        email: user?.email || 'unknown email',
                    },
                },
            },
        );

       
        if (confirmError) {
            setPaymentCardError(confirmError)
        }
        setLoading(false);
       

        if (paymentIntent.status === 'succeeded'){
            setTransaction(paymentIntent.id);
            console.log(paymentIntent)

            const payment ={
                transactionId: paymentIntent.id,
                price,
                email: user?.email,
                date: new Date(),
                image,
                name,
                availableSeats,
                instructor,
                classId : classId,
                enrollId: _id
                
            }
            console.log(payment)
            axiosSecure.post(`/enroll/${_id}`,payment)
            .then(res => {
                console.log(res.data);
                if (res.data) {
                    Swal.fire(
                        'Good job!',
                        'Your Enroll Successfully !',
                        'success'
                    )
                }
            })
        }

    };
    return (
        <>
{paymentCardError && <p className='text-center text-xl text-red-500'>{paymentCardError.message }</p>}
    {transaction && <p className='text-center text-xl text-green-500'>Your Transaction id : {transaction}</p>}
       {/* <p>{count}</p> */}
            <form className="m-4" onSubmit={handleSubmit} >
                <CardElement 
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                className="btn mt-10 w-full bg-green-500 px-5 text-sm hover:bg-green-700" type="submit"
                 disabled={!stripe || !clientSecret || loading || transaction}

                >
                    Pay Now
                </button>

            </form>
        </>
    );
};

export default CheckoutForm;
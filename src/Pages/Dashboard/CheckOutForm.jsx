import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
// import './CheckOutForm.css'

const CheckOutForm = ({ cart, price }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth();
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false)

    useEffect(() => {
        // console.log(price)
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then((res) => {
                    setClientSecret(res.data.clientSecret)
                    console.log(res.data.clientSecret)
                })
        }
    }, [axiosSecure, price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            setCardError('')
            // console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
            setCardError(confirmError);
        }
        console.log(paymentIntent)

        setProcessing(false)
        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                status: 'service panging',
                menuItems: cart.map(item => item.foodOrderId),
                CartItems: cart.map(item => item._id),
                itemName: cart.map(item => item.name),
                quantity: cart.length,
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Payment successful',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
        }
    }


    return (
        <>
            <form className='w-2/3 mx-auto' onSubmit={handleSubmit}>
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
                <button type="submit" disabled={!stripe || !clientSecret || processing} className="btn btn-outline btn-sm btn-accent mt-4">Pay</button>
            </form>
            {cardError && <p className="text-red-600 mt-4 text-center">{cardError}</p>}
            {transactionId && <p className="text-green-600 mt-4 text-center">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckOutForm;
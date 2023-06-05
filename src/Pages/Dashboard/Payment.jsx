import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../Shared/components/SectionTitle';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import UseCart from '../../Hooks/UseCart';

const stripePromise = loadStripe(import.meta.env.VITE_PK_TOKEN);

const Payment = () => {

    const [cart] = UseCart();
    const total = cart.reduce((sum, item)=> item.price + sum, 0)
    const price = parseFloat(total.toFixed(2))

    return (
        <div className='w-full'>
            <Helmet>
                <title>
                    Bistro Boss | Payment
                </title>
            </Helmet>
            <SectionTitle subHeading='Please Process' heading='Payment' />
            <Elements stripe={stripePromise}>
                <CheckOutForm cart={cart} price={price}/>
            </Elements>
        </div>
    );
};

export default Payment;
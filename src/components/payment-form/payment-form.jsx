import './payment-form.scss';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from '../button/button';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from "../../store/user/user-selector";
import { selectCartTotal } from '../../store/cart/cart-selector';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser)
    const [isProcessingPayment, setIsProcessingState] = useState(false)

    const paymentHandler = async (e) => {
        e.preventDefault();
        
        if(!stripe || !elements){
            return;
        }
        setIsProcessingState(true);
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: amount * 100 })
        }).then(res => res.json())
        // console.log(response)

        const clientSecret = response.paymentIntent.client_secret
        // console.log(clientSecret)

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest'
                }
            }
        })
         
        setIsProcessingState(false);

        if(paymentResult.error){
            alert(paymentResult.error.message)
            // console.log(paymentResult.error.message)
        }else{
            if(paymentResult.paymentIntent.status === 'succeeded')
                alert('Payment successfull');
        }

    }
    return (
        <div className='payment-form-container'>
            <form onSubmit={paymentHandler} className='form-container'>
            <h2> Credit card payment: </h2>
            <CardElement />
            <Button isLoading={isProcessingPayment}  buttonType='inverted'> Payment </Button>
             </form>
        </div>
    )
}

export default PaymentForm;

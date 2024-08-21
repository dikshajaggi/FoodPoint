import React, { useContext } from 'react'
import { Context } from '../utilities/context/Context'
import api from '../utilities/api'
import { Button } from '@mui/material'

const Payment = () => {

    const {totalPrice} = useContext(Context)

    const checkoutHandler = async(amount) =>{
        const {data: {order}} = await api.makePayment(amount)
        console.log(order, "response of payment api", window)

        const {data: {key}} = await api.getKey()

        const options = {
            key: key, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Diksha Jaggi",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: "http://localhost:8000/api/paymentverification",
            prefill: {
                "name": "sample",
                "email": "sample@example.com",
                "contact": "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3399cc"
            }
        };

        const rzp1 = new window.Razorpay(options);
            rzp1.open();
    }
    return (
        <Button onClick={() => checkoutHandler(totalPrice)}>Click</Button>
       
    )
}

export default Payment

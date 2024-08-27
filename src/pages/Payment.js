import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../utilities/context/Context'
import api from '../utilities/api'
import { useSelector } from 'react-redux'
import { UserContext } from '../utilities/context/UserContext'
import { BillingWrapper } from './styledComponents/Payment'
import { CartMain } from './styledComponents/Cart'
import FinalPayment from '../components/FinalPayment'

const Payment = () => {

    const {totalPrice, qtyUpdated, orderNumber} = useContext(Context)
    const items = useSelector((store) => store.cart.items)
    const [cartData, setCartData] = useState(items)
    const { userId, userData } = useContext(UserContext)
    const itemsObj = items.map(data => {
        return {menu: data.menu, quantity: data.quantity}
    })

    useEffect(() => {
        console.log(items, "cart items checkkk", itemsObj)
          setCartData(items)
           // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [userId, qtyUpdated, items])



    const checkoutHandler = async() =>{
        const {data: {order}} = await api.makePayment(totalPrice)
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
            callback_url: "https://foodpointbackend-7mxm.onrender.com/api/paymentverification",
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
        const orderItems = {
            name: userData.firstName,
            address: "123 Main St",
            address2: "Apt 4B",
            region: "North",
            pincode: 123456,
            city: "New York",
            state: "NY",
            contact: 9876543210,
            items:itemsObj,
            totalPrice: totalPrice,
            orderNumber: orderNumber,
            orderStatus: "Placed"
        }

        const data = {
            user: userId,
            orderItems: [orderItems]
        }
        await api.orderPlaced(data)
        await api.deleteAllCartItems(userId)
    }
    return (
        <CartMain>
            <BillingWrapper>
                <FinalPayment cartData={cartData} checkoutHandler={checkoutHandler}  />
            </BillingWrapper>
        </CartMain>
        
    )
}

export default Payment

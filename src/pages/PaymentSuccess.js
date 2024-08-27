/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SuccessPaymentWrapper } from './styledComponents/Payment'
import { Context } from '../utilities/context/Context'
import api from '../utilities/api'
import { UserContext } from '../utilities/context/UserContext'
import { useSelector } from 'react-redux'

const PaymentSuccess = () => {
    const searchQuery = useSearchParams()[0]
    const refNum = searchQuery.get("reference")
    const {totalPrice, orderNumber} = useContext(Context)
    const { userId, userData } = useContext(UserContext)
    const items = useSelector((store) => store.cart.items)

    const itemsObj = items.map(data => {
      return {menu: data.menu, quantity: data.quantity}
  })

    const placeOrder = async() => {
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
      const res = await api.orderPlaced(data)
      const res1 = await api.deleteAllCartItems(userId)
      console.log(res, "status of order api", res1)
    }

    useEffect(()=> {
      placeOrder()
    },[])

  return (
    <SuccessPaymentWrapper>
      <h3>Order Successful</h3>
      <h6>Reference No. {refNum}</h6>
    </SuccessPaymentWrapper>
  )
}

export default PaymentSuccess

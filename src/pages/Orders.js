/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import api from '../utilities/api'
import { UserContext } from '../utilities/context/UserContext'
import { Btn, Div1, InfoDiv, OrderCard, OrdersWrapper } from './styledComponents/Orders'

const Orders = () => {
  const { userId } = useContext(UserContext)
  const [orders, setOrders] = useState([])

  const getAllOrders = async() => {
    const res = await api.getAllOrders(userId)
    console.log(res.data.items.orderItems, "resresres")
    setOrders(res.data.items.orderItems)
  }

  useEffect(() => {
    getAllOrders()
  }, [])
 
  return (
    <OrdersWrapper>
      <h2 style={{marginTop: "20px"}}>PAST ORDERS</h2>
      {orders.map((item, index) => {
        return (
          <OrderCard key={index}>
            <Div1>
              <img src="" alt="img"/>
              <InfoDiv>
                <h4>Name</h4>
                <p>order number |  ordered on date time</p>
                <p>delievered | date time</p>
                <p>total paid</p>
                <div style={{display: "flex", alignItems: "center"}}>
                  <Btn>VIEW DETAILS</Btn>
                  <Btn style={{marginLeft: "20px"}}>REORDER</Btn>
                </div>
              </InfoDiv>
            </Div1>
          </OrderCard>
        )
      })}
      
    </OrdersWrapper>
  )
}

export default Orders
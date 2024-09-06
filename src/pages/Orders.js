/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import api from '../utilities/api'
import { UserContext } from '../utilities/context/UserContext'
import { Btn, Div1, InfoDiv, OrderCard, OrdersWrapper } from './styledComponents/Orders'
import Modal from '../components/Modal'

const Orders = () => {
  const { userId } = useContext(UserContext)
  const [orders, setOrders] = useState([])
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (order) => {
    setSelectedOrder(order)
    setIsModalOpen(true)
    
  }
  const closeModal = () => {
    setSelectedOrder(null)
    setIsModalOpen(false)
  }

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
              <InfoDiv>
                <h5>Order Number: {item.orderNumber}</h5>
                <p>{item.orderStatus} | {item.orderDate}</p>
                <p>Total Paid: ₹{item.totalPrice}</p>
                <div style={{display: "flex", alignItems: "center"}}>
                  <Btn onClick={() => openModal(item.items)}>VIEW DETAILS</Btn>
                  <Btn style={{marginLeft: "20px"}}>REORDER</Btn>
                </div>
                {item.items && <Modal key={index} isOpen={isModalOpen} onClose={closeModal} data={selectedOrder}></Modal>}
              </InfoDiv>
            </Div1>
          </OrderCard>
        )
      })}
      
    </OrdersWrapper>
  )
}

export default Orders
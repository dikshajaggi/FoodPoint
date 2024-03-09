import React, { useContext, useEffect, useState } from 'react'
import { Desc, DescInfo, EstTime, Image, Information, Label, LabelDesc, LableInfo, OrdNo, OrderDelivered, OrdersMain, OrdersWrapper, Status, StatusWrapper } from './styledComponents/Orders'
import Header from '../components/Header'
import Footer from '../components/Footer'
import delivery from "../assets/images/delivery.png"
import processed from "../assets/images/processed.png"
import confirmed from "../assets/images/confirmed.png"
import placed from "../assets/images/placed.png"
import { Context } from '../utilities/context/Context'
import { EmptyCart } from './styledComponents/Cart'

const Orders = () => {
  const context = useContext(Context)
  const [orderDelivered, setOrderDelivered] = useState(false)

  const statusArr = [
    {icon: placed, label: "order placed", desc: "We have recieved your order", id: "placed"}, 
    {icon: processed, label: "order confirmed", desc:"Your order has been confirmed", id: "confirmed"},
    {icon: confirmed, label: "order processing", desc: "We are preparing your order", id: "processing"},
    {icon: delivery, label: "out for delivery", desc:"Your order is out for delivery", id: "delivery"}
  ]

  useEffect(() => {
    if(context.status[context.status.length - 1] === "end") {
      context.setStatus([])
      setOrderDelivered(true)
      context.setOrderPlaced(false)
    }
  }, [context.status])

  return (
    <OrdersWrapper>
      <Header/>
      <OrdersMain>
        {context.orderPlaced === false ? <EmptyCart><h4>No orders</h4></EmptyCart> : orderDelivered ? <>
          <OrderDelivered>
          <EmptyCart><h4>Your order has been delivered successfully !</h4></EmptyCart> 
          </OrderDelivered>
        </> : <>
          <Information>
          <EstTime>
            <LableInfo>ESTIMATED TIME</LableInfo>
            <DescInfo>30 MINUTES</DescInfo>
          </EstTime>
          <OrdNo>
            <LableInfo>ORDER NUMBER</LableInfo>
            <DescInfo>#1234HB</DescInfo>
          </OrdNo>
        </Information>
        <Status>
          {statusArr.map((item, index) => {
            return(
              <StatusWrapper key = {index}>
                <Image src = {item.icon} />
                <LabelDesc>
                  <Label fade= {context.status.includes(item.id) ? false : true}>{item.label}</Label>
                  <Desc  fade= {context.status.includes(item.id) ? false : true}>{item.desc}</Desc>
                </LabelDesc>
              </StatusWrapper>
            )
            })}
        </Status>
        </>}
        
      </OrdersMain>
      <Footer/>
    </OrdersWrapper>
  )
}

export default Orders

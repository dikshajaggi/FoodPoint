import React from 'react'
import { Desc, Image, Information, Label, LabelDesc, OrdersMain, OrdersWrapper, Status, StatusWrapper } from './styledComponents/Orders'
import Header from '../components/Header'
import Footer from '../components/Footer'
import delivery from "../assets/images/delivery.png"
import processed from "../assets/images/processed.png"
import confirmed from "../assets/images/confirmed.png"
import placed from "../assets/images/placed.png"

const Orders = () => {

  const statusArr = [
    {icon: placed, label: "order placed", desc: "We have recieved your order"}, 
    {icon: processed, label: "order confirmed", desc:"Your order has been confirmed"},
    {icon: confirmed, label: "order processing", desc: "We are preparing your order"},
    {icon: delivery, label: "out for delivery", desc:"Your order is out for delivery"}
  ]
  return (
    <OrdersWrapper>
      <Header/>
      <OrdersMain>
        <Information></Information>
        <Status>
          {statusArr.map(item => {
            return(
              <StatusWrapper>
                <Image src = {item.icon} />
                <LabelDesc>
                  <Label>{item.label}</Label>
                  <Desc>{item.desc}</Desc>
                </LabelDesc>
              </StatusWrapper>
            )
            })}
        </Status>
      </OrdersMain>
      <Footer/>
    </OrdersWrapper>
  )
}

export default Orders

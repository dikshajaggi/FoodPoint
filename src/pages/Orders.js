import React, { useContext, useEffect, useState } from 'react'
import { Button, ButtonGroup, Check, Desc, DescInfo, EmptyCart, EmptyCartMapBtn, EstTime, Image, ImageChecked, Information, Item, Label, LabelDesc, LableInfo, OrdNo, OrderDelivered, OrderDetails, OrderHistory, OrderListContainer, OrderWrapper, OrdersMain, OrdersWrapper, Status, StatusCheckWrapper, StatusWrapper } from './styledComponents/Orders'
import Header from '../components/Header'
import Footer from '../components/Footer'
import delivery from "../assets/images/delivery.png"
import processed from "../assets/images/processed.png"
import confirmed from "../assets/images/confirmed.png"
import placed from "../assets/images/placed.png"
import { Context } from '../utilities/context/Context'
import placed_fade from "../assets/images/placed_fade.png"
import processed_fade from "../assets/images/processed_fade.png"
import delivery_fade from "../assets/images/delivery_fade.png"
import confirmation_fade from "../assets/images/confirmation_fade.png"
import checked from "../assets/images/checked.png"
import checked_faded from "../assets/images/checked_fade.png"
// import { useSelector } from 'react-redux'
import SubHeader from '../components/SubHeader'
import { LinkStyled } from '../components/styledComponents/Header'
import prevOrderList from "../assets/prevOrderList.json"
import { useDispatch } from 'react-redux'
import { addItems } from '../utilities/redux/cartSlice'
import OrderLIst from '../components/OrderLIst'

const Orders = () => {
  const context = useContext(Context)
  // const items = useSelector(store => store.cart.items)
  const [active, setActive] = useState("current")
  const [orderDelivered, setOrderDelivered] = useState(false)
  const dispatch = useDispatch()
  const [openOrderIndexes, setOpenOrderIndexes] = useState([])
  const [prevOrdersList, setPrevOrdersList] = useState(prevOrderList)

  const statusArr = [
    { icon: placed, label: "order placed", desc: "We have recieved your order", id: "placed", fadedicon: placed_fade },
    { icon: processed, label: "order confirmed", desc: "Your order has been confirmed", id: "confirmed", fadedicon: processed_fade },
    { icon: confirmed, label: "order processing", desc: "We are preparing your order", id: "processing", fadedicon: confirmation_fade },
    { icon: delivery, label: "out for delivery", desc: "Your order is out for delivery", id: "delivery", fadedicon: delivery_fade }
  ]

  const toggleOrderList = (index) => {
    setOpenOrderIndexes(prevIndexes => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter(i => i !== index)
      } else {
        return [...prevIndexes, index]
      }
    })
  }


  const addToCart = (order) => {
    dispatch(addItems(order))
  }

  const closeOrderList = () => {
    setOpenOrderIndexes([])
  }

  useEffect(() => {
    if (context.status[context.status.length - 1] === "end") {
      context.setStatus([])
      setOrderDelivered(true)
      context.setOrderPlaced(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.status])

  const formatDate = () => {
    const currentDate = new Date();

    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month starts from 0, so add 1
    const year = currentDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate
  }
  console.log(localStorage.getItem('cartItems'), "mango")


  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    // if (context.orderPlaced) {
    //   storedCartItems.map(item => {
    //     const formattedDate = formatDate()
    //     const obj = {
    //       orderNo: "#123HB",
    //       orderDate: formattedDate,
    //       orderPrice: "1226",
    //       orderStatus: "Delivered",
    //       order: item
    //     }
    //     setPrevOrdersList(prev => [...prev, obj])
    //   })
    // }
  }, [context.orderPlaced])


  return (
    <OrdersWrapper>
      <Header />
      <SubHeader setActive={setActive} />
      {active === "current" ? <OrdersMain>
        {context.orderPlaced === false && orderDelivered === false ? <EmptyCartMapBtn>
          <EmptyCart><h4>No orders</h4></EmptyCart>
          <Button
            disabled={context.orderPlaced === false || orderDelivered}
            style={{ width: "auto", position: "absolute", right: "10px", backgroundColor: context.orderPlaced === false || orderDelivered ? "rgba(251, 146, 53, 0.5)" : "#FB9235" }}
          >
            <LinkStyled
              to={context.orderPlaced === false || orderDelivered ? '#' : "/map"}
              style={{ color: "#fff", pointerEvents: context.orderPlaced === false || orderDelivered ? "none" : "auto" }}
            >
              Track order on Map
            </LinkStyled>
          </Button>
        </EmptyCartMapBtn> : orderDelivered ? <>
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
          <Button
            disabled={context.orderPlaced === false || orderDelivered}
            style={{ width: "auto", position: "absolute", right: "10px", backgroundColor: context.orderPlaced === false || orderDelivered ? "rgba(251, 146, 53, 0.5)" : "#FB9235" }}
          >
            <LinkStyled
              to={context.orderPlaced === false || orderDelivered ? '#' : "/map"}
              style={{ color: "#fff", pointerEvents: context.orderPlaced === false || orderDelivered ? "none" : "auto" }}
            >
              Track order on Map
            </LinkStyled>
          </Button>
          <Status>
            {statusArr.map((item, index) => {
              return (
                <StatusCheckWrapper>
                  <Check>
                    <ImageChecked src={context.status.includes(item.id) ? checked : checked_faded}></ImageChecked>
                  </Check>
                  <StatusWrapper key={index}>
                    <Image src={context.status.includes(item.id) ? item.icon : item.fadedicon} />
                    <LabelDesc>
                      <Label fade={context.status.includes(item.id) ? false : true}>{item.label}</Label>
                      <Desc fade={context.status.includes(item.id) ? false : true}>{item.desc}</Desc>
                    </LabelDesc>
                  </StatusWrapper>
                </StatusCheckWrapper>
              )
            })}
          </Status>
        </>}

      </OrdersMain> : <OrderHistory>
        <h4>Previous Orders</h4>
        {prevOrdersList.map((item, index) => {
          return (
            <OrderWrapper key={item.id}>
              <OrderDetails>
                <h6>Order Number - <Item>{item.orderNo}</Item></h6>
                <h6>Order Date - <Item>{item.orderDate}</Item></h6>
                <h6>Order Price - <Item>{item.orderPrice}</Item></h6>
                <h6>Order Status - <Item>{item.orderStatus}</Item></h6>
              </OrderDetails>
              <ButtonGroup>
                <Button onClick={() => toggleOrderList(index)}>View order</Button>
                <Button onClick={() => addToCart(item.order)}>Reorder</Button>
                {openOrderIndexes.includes(index) && (
                  <OrderListContainer>
                    <OrderLIst items={item.order} onClose={closeOrderList} />
                  </OrderListContainer>
                )}
              </ButtonGroup>
            </OrderWrapper>
          )
        })}
      </OrderHistory>
      }
      <Footer />
    </OrdersWrapper>
  )
}

export default Orders

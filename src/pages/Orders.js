import React, { useContext, useEffect, useState } from 'react'
import { Button, ButtonGroup, DescInfo, EmptyCart, EmptyCartMapBtn, EstTime, Information, Item, LableInfo, OrdNo, OrderDelivered, OrderDetails, OrderHistory, OrderListContainer, OrderWrapper, OrdersMain, OrdersWrapper, Status } from './styledComponents/Orders'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import delivery from "../assets/images/delivery.png"
// import processed from "../assets/images/processed.png"
// import confirmed from "../assets/images/confirmed.png"
// import placed from "../assets/images/placed.png"
import { Context } from '../utilities/context/Context'
// import placed_fade from "../assets/images/placed_fade.png"
// import processed_fade from "../assets/images/processed_fade.png"
// import delivery_fade from "../assets/images/delivery_fade.png"
// import confirmation_fade from "../assets/images/confirmation_fade.png"
// import checked from "../assets/images/checked.png"
// import checked_faded from "../assets/images/checked_fade.png"
// import { useSelector } from 'react-redux'
import SubHeader from '../components/SubHeader'
import { LinkStyled } from '../components/styledComponents/Header'
import prevOrderList from "../assets/prevOrderList.json"
import { useDispatch } from 'react-redux'
import { addItems } from '../utilities/redux/cartSlice'
import OrderLIst from '../components/OrderLIst'
import langConfig from "../config/langConfig.json"
import api from '../utilities/api'
import { UserContext } from '../utilities/context/UserContext'

const Orders = () => {
  const context = useContext(Context)
  const { userId } = useContext(UserContext)

  // const items = useSelector(store => store.cart.items)
  const [active, setActive] = useState("current")
  const [orderDelivered, setOrderDelivered] = useState(false)
  const dispatch = useDispatch()
  const [openOrderIndexes, setOpenOrderIndexes] = useState([])
  const [prevOrdersList, setPrevOrdersList] = useState([])

  // const statusArr = [
  //   { icon: placed, label: "order placed", desc: "We have recieved your order", id: "placed", fadedicon: placed_fade },
  //   { icon: processed, label: "order confirmed", desc: "Your order has been confirmed", id: "confirmed", fadedicon: processed_fade },
  //   { icon: confirmed, label: "order processing", desc: "We are preparing your order", id: "processing", fadedicon: confirmation_fade },
  //   { icon: delivery, label: "out for delivery", desc: "Your order is out for delivery", id: "delivery", fadedicon: delivery_fade }
  // ]

  // const statusArrHn = [
  //   { icon: placed, label: "आदेश रखा", desc: "हमें आपका ऑर्डर प्राप्त हो गया है", id: "placed", fadedicon: placed_fade },
  //   { icon: processed, label: "ऑर्डर की पुष्टि की गई", desc: "आपके ऑर्डर की पुष्टि हो गई है", id: "confirmed", fadedicon: processed_fade },
  //   { icon: confirmed, label: "आदेश प्रसंस्करण", desc: "हम आपका ऑर्डर तैयार कर रहे हैं", id: "processing", fadedicon: confirmation_fade },
  //   { icon: delivery, label: "डिलीवरी के लिए निकले हैं", desc: "आपका ऑर्डर डिलीवरी के लिए निकल चुका है", id: "delivery", fadedicon: delivery_fade }
  // ]

  // const [statusArrContent, setStatusArrContent] = useState(statusArr)


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

  async function getallOrders() {
    const res = await api.getAllOders(userId)
    setPrevOrdersList(res.data.items?.orderItems)
  }

  useEffect(() => {
    getallOrders()
    // eslint-disable-next-line
  }, [userId])

  // useEffect(() => {
  //   if (prevOrdersList.length === 0) localStorage.setItem('prevOrders', JSON.stringify(prevOrderList))
  //   else localStorage.setItem('prevOrders', JSON.stringify(prevOrdersList))
  // }, [prevOrdersList, context.orderPlaced])

  // useEffect(() => {
  //   if (context.language === "en") setStatusArrContent(statusArr)
  //   else setStatusArrContent(statusArrHn)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [context.language])

  return (
    <OrdersWrapper setHeight={context.orderPlaced === false && orderDelivered === false ? true : false}>
      {/* <div>
        <Header /> */}
        {/* <SubHeader setActive={setActive} />
        <Button
          disabled={context.orderPlaced === false || orderDelivered}
          style={{ width: "auto", position: "absolute", borderColor: "transparent", right: "10px", color: "#ffffff", backgroundColor: context.orderPlaced === false || orderDelivered ? "rgb(188,188,188)" : "#000000" }}
        >
          <LinkStyled
            to={context.orderPlaced === false || orderDelivered ? '#' : "/map"}
            style={{ color: "#fff", pointerEvents: context.orderPlaced === false || orderDelivered ? "none" : "auto" }}
          >
            {context.language === "en" ? langConfig[0].orders.track.en : langConfig[0].orders.track.hn}
          </LinkStyled>
        </Button>
      </div>
     <div>
     {active === "current" ? <OrdersMain>
        {context.orderPlaced === false && orderDelivered === false ? <EmptyCartMapBtn>
          <EmptyCart><h4>{context.language === "en" ? langConfig[0].orders.no.en : langConfig[0].orders.no.hn}</h4></EmptyCart>
        </EmptyCartMapBtn> : orderDelivered ? <>
          <OrderDelivered>
            <EmptyCart><h4>{context.language === "en" ? langConfig[0].orders.order_success.en : langConfig[0].orders.order_success.hn}</h4></EmptyCart>
          </OrderDelivered>
        </> : <>
          <Information>
            <EstTime>
              <LableInfo>ESTIMATED TIME</LableInfo>
              <DescInfo>30 MINUTES</DescInfo>
            </EstTime>
            <OrdNo>
              <LableInfo>ORDER NUMBER</LableInfo>
              <DescInfo>{context.orderNumber}</DescInfo>
            </OrdNo>
          </Information>
          <Status> */}
            {/* {statusArrContent.map((item, index) => {
              return (
                <StatusCheckWrapper >
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
            })} */}
          {/* </Status>
        </>}

      </OrdersMain> : <OrderHistory>
        <h4 style={{ color: "white" }}>{context.language === "en" ? langConfig[0].orders.prev.en : langConfig[0].orders.prev.hn}</h4>
        {prevOrdersList.map((item, index) => {
          const menu = item.items
          return (
            <OrderWrapper key={item.id}>
              <OrderDetails>
                <h6>Order Number - <Item>{item.orderNumber}</Item></h6>
                <h6>Order Date - <Item>{item.orderDate}</Item></h6>
                <h6>Order Price - <Item>{item.totalPrice}</Item></h6>
                <h6>Order Status - <Item>{item.orderStatus}</Item></h6>
              </OrderDetails>
              <ButtonGroup>
                <Button onClick={() => toggleOrderList(index)}>{context.language === "en" ? langConfig[0].orders.view.en : langConfig[0].orders.view.hn}</Button>
                <Button onClick={() => addToCart(item.menu)}>{context.language === "en" ? langConfig[0].orders.reorder.en : langConfig[0].orders.reorder.hn}</Button>
                {openOrderIndexes.includes(index) && (
                  <OrderListContainer>
                    <OrderLIst items={menu} onClose={closeOrderList} />
                  </OrderListContainer>
                )}
              </ButtonGroup>
            </OrderWrapper>
          )
        })}
      </OrderHistory>
      }
     </div> */}
      <Footer />
    </OrdersWrapper>
  )
}

export default Orders
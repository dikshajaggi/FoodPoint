import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../utilities/context/UserContext'
import { LinkStyled } from '../components/styledComponents/Header'
import { CheckoutBtn, CheckoutLabel, CheckoutWrapper, TotalLabels, TotalWrapper } from './styledComponents/Checkout'
// import { useSelector } from 'react-redux'
import langConfig from "../config/langConfig.json"
import { Context } from '../utilities/context/Context'

const Checkout = ({cartData}) => {
    console.log(cartData, "getting checkout props")
    const { userData } = useContext(UserContext)
    // const cartItems = useSelector(state => state.cart.items)
    const [total, setTotal] = useState()
    const [totalItems, setTotalItems] = useState()
    const context = useContext(Context)

    useEffect(() => {
        const totalItems = cartData.reduce((acc, current) => acc + current.quantity, 0);
        const totalPrice = cartData.reduce((acc, current) => {
            console.log(current, "current prop check")
            if (current.menu && current.menu.defaultPrice) {
                return acc + current.menu.defaultPrice * current.quantity;
            } else if (current.menu && current.menu.price) {
                return acc + current.menu.price * current.quantity;
            }
            return acc;
        }, 0);
        setTotalItems(totalItems);
        setTotal(totalPrice);
    }, [cartData])

    return (
        <CheckoutWrapper>
            <CheckoutLabel>{context.language === "en" ?  langConfig[0].cart.checkout.en : langConfig[0].cart.checkout.hn}</CheckoutLabel>
            <br></br>
            <TotalWrapper>
                <TotalLabels>{context.language === "en" ?  langConfig[0].cart.totalItems.en : langConfig[0].cart.totalItems.hn} : <span style={{ fontWeight: 400 }}>{totalItems}</span></TotalLabels>
                <TotalLabels>{context.language === "en" ?  langConfig[0].cart.totalPrice.en : langConfig[0].cart.totalPrice.hn} : <span style={{ fontWeight: 400 }}>Rs. {(total) / 100}</span></TotalLabels>
            </TotalWrapper>
            {userData !== null? <LinkStyled to="/payment"><CheckoutBtn>{context.language === "en" ?  langConfig[0].cart.checkout.en : langConfig[0].cart.checkout.hn}</CheckoutBtn></LinkStyled> : <LinkStyled to="/login"><CheckoutBtn>{context.language === "en" ?  langConfig[0].cart.checkout.en : langConfig[0].cart.checkout.hn}</CheckoutBtn></LinkStyled>}
        </CheckoutWrapper>
    )
}

export default Checkout

import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../utilities/context/UserContext'
import { LinkStyled } from '../components/styledComponents/Header'
import { CheckoutBtn, CheckoutLabel, CheckoutWrapper, TotalLabels, TotalWrapper } from './styledComponents/Checkout'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const username = useContext(UserContext)
    // const context = useContext(Context)
    const cartItems = useSelector(state => state.cart.items)
    const [total, setTotal] = useState()

    // const [items, setItems] = useState(context.quantity.map(item => item.qty))
    const [totalItems, setTotalItems] = useState()
    // const [price, setPrice] = useState(context.quantity.map(item => item.price))
    // const [totalPrice, setTotalPrice] = useState(_.sum(price))

    // useEffect(() => {
    //     const price_current = context.quantity.map(item => item.price)
    //     const items_current = context.quantity.map(item => item.qty)
    //     setItems(context.quantity.map(item => item.qty))
    //     setTotalItems(_.sum(items_current))
    //     setPrice(context.quantity.map(item => item.price))
    //     setTotalPrice(_.sum(price_current))
    //     context.setTotalItems(_.sum(items_current))
    //     context.setTotalPrice(_.sum(price_current))
    // }, [context.qtyCheck])

    useEffect(() => {
        const totalItems = cartItems.reduce((acc, current) => acc + current.quantity, 0);
        const totalPrice = cartItems.reduce((acc, current) => {
            if (current.item && current.item.defaultPrice) {
                return acc + current.item.defaultPrice * current.quantity;
            } else if (current.item && current.item.price) {
                return acc + current.item.price * current.quantity;
            }
            return acc;
        }, 0);
        setTotalItems(totalItems);
        setTotal(totalPrice);
    }, [cartItems])

    return (
        <CheckoutWrapper>
            <CheckoutLabel>Checkout</CheckoutLabel>
            <br></br>
            <TotalWrapper>
                <TotalLabels>Total Items : <span style={{ fontWeight: 400 }}>{totalItems}</span></TotalLabels>
                <TotalLabels>Total Price : <span style={{ fontWeight: 400 }}>Rs. {(total) / 100}</span></TotalLabels>
            </TotalWrapper>
            {username.user !== "" ? <LinkStyled to="/payment"><CheckoutBtn>Checkout</CheckoutBtn></LinkStyled> : <LinkStyled to="/login"><CheckoutBtn>Checkout</CheckoutBtn></LinkStyled>}
        </CheckoutWrapper>
    )
}

export default Checkout

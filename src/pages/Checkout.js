import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../utilities/context/UserContext'
import { Context } from '../utilities/context/Context'
import { LinkStyled } from '../components/styledComponents/Header'
import { CheckoutBtn, CheckoutLabel, CheckoutWrapper, TotalLabels, TotalWrapper } from './styledComponents/Checkout'

const Checkout = (props) => {
    const username = useContext(UserContext)
    const context = useContext(Context)
    const qty = context.quantity.filter((item) => props.id === item.id).length
    const total = []
    console.log(qty, "context.quantity.qty")
    props.items.map(item => total.push(item.price / 100))
    let sum = 0
    for (let i = 0; i < total.length; i++) {
        sum += total[i];
    }

    return (
        <CheckoutWrapper>
            <CheckoutLabel>Checkout</CheckoutLabel>
            <br></br>
            <TotalWrapper>
                <TotalLabels>Total items: <span style={{ fontWeight: 400 }}>{total.length}</span></TotalLabels>
                <TotalLabels>Total : <span style={{ fontWeight: 400 }}>{sum.toFixed(2)}</span></TotalLabels>
            </TotalWrapper>
            {username.user !== "" ? <LinkStyled to="/payment"><CheckoutBtn>Checkout</CheckoutBtn></LinkStyled> : <LinkStyled to="/login"><button>Checkout</button></LinkStyled>}
        </CheckoutWrapper>
    )
}

export default Checkout

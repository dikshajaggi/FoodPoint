import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../utilities/context/UserContext'
import { Context } from '../utilities/context/Context'
import { LinkStyled } from '../components/styledComponents/Header'
import { CheckoutBtn, CheckoutLabel, TotalWrapper } from './styledComponents/Checkout'

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
        <div>
            <CheckoutLabel>CHECKOUT</CheckoutLabel>
            <br></br>
            <TotalWrapper>
                <h4>Total items: {total.length}</h4>
                <h4>Total : {sum.toFixed(2)} {context.quantity.qty}</h4>
                <br></br>
                {username.user !== "" ? <LinkStyled to="/payment"><CheckoutBtn>Checkout</CheckoutBtn></LinkStyled> : <LinkStyled to="/login"><button>Checkout</button></LinkStyled>}
            </TotalWrapper>
        </div>
    )
}

export default Checkout

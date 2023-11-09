import React, { useContext } from 'react'
import { Account, Filters, Wrapper } from './styledComponents/FooterRes'
import { Logo } from '../styledComponents/Footer'
import { Avatar, CartItemsLength, LinkStyled } from '../styledComponents/Header'
import { UserContext } from '../../utilities/context/UserContext'
import { useTheme } from 'styled-components'
import { useSelector } from 'react-redux'

const FooterRes = () => {
    const { user, setUser } = useContext(UserContext)
    const theme = useTheme()
    const items = useSelector((store) => store.cart.items)

  return (
    <Wrapper>
        <Logo>HungerBites</Logo>
        <Filters>
            <i class="fa-solid fa-filter" style= {{color: "#ffffff"}}></i>
            Filters
        </Filters>
        <LinkStyled to="/cart">
            <i class="fa-sharp fa-solid fa-cart-shopping" style={{ color: "white", fontSize: "16px" }}>
            <CartItemsLength style={{ color: 'white', fontSize: "12px" }}>{items.length}</CartItemsLength></i>
        </LinkStyled>
        <Account>
            <Avatar><i class="fa-solid fa-user" style={{ fontSize: "14px" }}></i></Avatar>
            {user.displayName ? user.displayName : "Account" }
        </Account>
    </Wrapper>
  )
}

export default FooterRes

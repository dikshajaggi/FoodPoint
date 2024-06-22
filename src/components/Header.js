import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../utilities/context/UserContext'
import { useDispatch, useSelector } from 'react-redux'
import "../style.css"
import { Context } from "../utilities/context/Context"
import {CartItemsLength, CartWrapper, Cart, HeaderDiv, HeaderWrapper, LinkStyled, Location, Logo, MobileHeader, NavbarLI, Offers, Username, LogoLoc, ChatGPTButton } from './styledComponents/Header'
import { useTheme } from 'styled-components'
import offers from "../assets/images/offers.png"
import offersAccent from "../assets/images/offersAccent.png"
import DrawerComponent from './DrawerComponent'
import { clearCart } from '../utilities/redux/cartSlice'
import langConfig from "../config/langConfig.json"
import { UserButton } from '@clerk/clerk-react'
import api from '../utilities/api'


const Header = () => {
    const theme = useTheme()
    const { userData, userId } = useContext(UserContext)
    const context = useContext(Context)
    const cartStoreData = useSelector(state => state.cart.items)
    const [cartItems, setCartItems] = useState(cartStoreData)
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const langConfigHeader = langConfig[0].header

    const getCartItems = async() => {
        const cartdata =  await api.getCartItems(userId)
        if (cartdata.success) setCartItems(cartdata.items.items)
      }

    const changeLang = () => {
        if (context.language === "en") context.setLanguage("hn")
        else if (context.language === "hn") context.setLanguage("en")
    }

    const changePageTitle = (title) => {
        document.title = title
    }

    useEffect(() => {
       if (userId) getCartItems()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId, cartStoreData])

    useEffect(() => {
        console.log(context.orderPlaced, "28")
        if (context.orderPlaced) {
            dispatch(clearCart())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context.orderPlaced])

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <HeaderDiv>
            <HeaderWrapper>
               <LogoLoc>
                <LinkStyled onClick={() => changePageTitle("FoodPoint")} to="/" style={{ color: window.location.pathname === "/" ? theme.colors.accent : "white" }}><Logo style={{ color: theme.colors.accent }}>FoodPoint</Logo></LinkStyled>
                    <Location onClick={toggleDrawer}>
                        {localStorage.getItem("location") !== null ? `${localStorage.getItem("location").slice(0, 20)}....` : null} <i class="fa-solid fa-angle-down" style={{ marginLeft: "1vw", marginTop: "4px", color: theme.colors.accent, cursor: "pointer" }}></i>
                    </Location>
               </LogoLoc>
                <DrawerComponent open={open} setOpen={setOpen} />
                <Cart onClick={() => changePageTitle("FoodPoint | Cart")}>
                    <LinkStyled to="/cart"><i class="fa-sharp fa-solid fa-cart-shopping" style={{cursor: "pointer",  color: cartItems.length === 0 ? "white" : theme.colors.accent, fontSize: "16px" }}><CartItemsLength style={{ cursor: "pointer", color: 'white', fontSize: "12px" }}>{cartItems.length}</CartItemsLength></i></LinkStyled>
                </Cart>
                <CartWrapper>
                    <Offers onClick={() => changePageTitle("FoodPoint | Search")}>
                        {window.location.pathname === "/search" ? <i class="fa fa-search" style={{cursor: "pointer", color:  "#FB9235"}} aria-hidden="true"></i> : <i class="fa fa-search" style={{color:"white", cursor: "pointer"}} aria-hidden="true"></i>}
                        <LinkStyled to="/search" style={{ color: window.location.pathname === "/search" ? theme.colors.accent : "white" }}><NavbarLI header="main">{context.language === "en" ? langConfigHeader.search.en : langConfigHeader.search.hn}</NavbarLI></LinkStyled>
                    </Offers>
                    <Offers onClick={() => changePageTitle("FoodPoint | Offers")}>
                        {window.location.pathname === "/offers" ? <img src={offersAccent} alt="" style={{ cursor: "pointer", height: "16px", width: "16px", marginTop: "2px" }} /> : <img src={offers} alt="" style={{ cursor: "pointer", height: "16px", width: "16px", marginTop: "2px" }} />}
                        <LinkStyled to="/offers" style={{ color: window.location.pathname === "/offers" ? theme.colors.accent : "white" }}><NavbarLI header="main">{context.language === "en" ? langConfigHeader.offers.en : langConfigHeader.offers.hn}</NavbarLI></LinkStyled>
                    </Offers>
                    <Offers onClick={() => changePageTitle("FoodPoint | Fav Restaurants")}>
                        {window.location.pathname === "/fav-restaurant" ? <i class="fa fa-heart" style={{cursor: "pointer", color:  "#FB9235"}} aria-hidden="true"></i> : <i class="fa fa-heart" style={{color:"white", cursor: "pointer"}} aria-hidden="true"></i>}
                        <LinkStyled to="/fav-restaurant" style={{ marginLeft: "6px",  color: window.location.pathname === "/fav-restaurant" ? theme.colors.accent : "white" }}><NavbarLI header="main">{context.language === "en" ? langConfigHeader.user_dropdown.favourites.en : langConfigHeader.user_dropdown.favourites.hn}</NavbarLI></LinkStyled>
                    </Offers>
                    <Offers onClick={() => changePageTitle("FoodPoint | Orders")}>
                        {window.location.pathname === "/orders" ? <i class="fa fa-list" style={{cursor: "pointer", color:  "#FB9235"}} aria-hidden="true"></i> : <i class="fa fa-list" style={{color:"white", cursor: "pointer"}} aria-hidden="true"></i>}
                        <LinkStyled to="/orders" style={{ marginLeft: "6px",  color: window.location.pathname === "/orders" ? theme.colors.accent : "white" }}><NavbarLI header="main">{context.language === "en" ? langConfigHeader.user_dropdown.orders.en : langConfigHeader.user_dropdown.orders.hn}</NavbarLI></LinkStyled>
                    </Offers>
                    <LinkStyled onClick={() => changePageTitle("FoodPoint | Cart")} to="/cart"><i class="fa-sharp fa-solid fa-cart-shopping" style={{ color: cartItems.length === 0 ? "white" : theme.colors.accent, fontSize: "16px" }}><CartItemsLength style={{ color: 'white', fontSize: "12px" }}>{cartItems.length}</CartItemsLength></i></LinkStyled>
                    <NavbarLI onClick={changeLang} header="main" style={{color: "white", cursor: "pointer"}}>{context.language === "en" ? langConfigHeader.user_dropdown.lng.hn : langConfigHeader.user_dropdown.lng.en}</NavbarLI>{userData !== null ? <UserButton /> : <LinkStyled to="/login"><Username>{context.language === "en" ? langConfigHeader.user_dropdown.login.en : langConfigHeader.user_dropdown.login.hn}</Username></LinkStyled>}
                    <LinkStyled onClick={() => changePageTitle(`FoodPoint | AI Dish Guru`)} to="/gpt-dish-discovery" style={{color: "#fff", fontWeight: 600, fontSize: "14px"}}><ChatGPTButton>AI Dish Guru</ChatGPTButton></LinkStyled>
                </CartWrapper>
            </HeaderWrapper>

            <MobileHeader>
                <LinkStyled to="/login"><Username style={{ fontSize: "14px", color: "#fff", textTransform: "capitalize" }}> {userData !== null ? userData.firstName : "Login"} </Username></LinkStyled>
                {userData !== null ? <>
                    <LinkStyled style={{ fontSize: "14px", color: "#fff" }} to="/orders">{context.language === "en" ? langConfigHeader.user_dropdown.orders.en : langConfigHeader.user_dropdown.orders.hn}</LinkStyled>
                    <LinkStyled style={{ fontSize: "14px", color: "#fff" }} option="fav" to="/fav-restaurant">{context.language === "en" ? langConfigHeader.user_dropdown.favourites.en : langConfigHeader.user_dropdown.favourites.hn}</LinkStyled></> : null}
                    <LinkStyled style={{ fontSize: "14px", color: "#fff" }} onClick={() => context.language === "en" ? context.setLanguage("hn") : context.setLanguage("en")}>{context.language === "en" ? langConfigHeader.user_dropdown.lng.en : langConfigHeader.user_dropdown.lng.hn}</LinkStyled>
            </MobileHeader>
        </HeaderDiv>
    )
}

export default Header

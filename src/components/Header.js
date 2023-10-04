import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../utilities/context/UserContext'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"
import "../style.css"
import { Context } from "../utilities/context/Context"
import { Avatar, CartItemsLength, CartWrapper, Categories, CategoryLabel, HeaderDiv, HeaderWrapper, Input, LinkStyled, LoginUser, NavbarLI, NavbarUL, SearchCartWrapper, SearchWrapper, UserDropdown, UserInfo, Username } from './styledComponents/Header'
import { data } from "../assets/data"
import { useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utilities/firebase'
import { addUser, removeUser } from '../utilities/redux/userSlice'


const Header = () => {
    const { user, setUser } = useContext(UserContext)
    const context = useContext(Context)
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const items = useSelector((store) => store.cart.items)
    const [restData, setrestData] = useState(data)
    const [searchvalue, setSearchvalue] = useState("")
    const [matchingRest, setMatchingRest] = useState([])
    const currentPathname = location.pathname;
    const params = useParams()
    const headerPaths = ["/signup", "/login", "/about", "/offers", "/cart"];
    const linkInfo = headerPaths.includes(currentPathname) || currentPathname === `/rest/${params.id}`
        ? "header"
        : "subHeader";

    const allRestNames = []
    restData?.filter((item) => allRestNames.push(item?.info?.name))

    const findMatching = () => {
        const matching = []
        for (const rest of allRestNames) {
            if (rest.toLowerCase().includes(searchvalue.toLowerCase())) matching.push(rest)
        }
        console.log(matching, "matchingRest")
        setMatchingRest(matching)
    }

    useEffect(() => {
        getRest()
    }, [])

    async function getRest() {
        let api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        if (context.filter === "rating") api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&sortBy=RATING&page_type=DESKTOP_WEB_LISTING"
        else if (context.filter === "delivery-time") api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&sortBy=DELIVERY_TIME&page_type=DESKTOP_WEB_LISTING"
        else if (context.filter === "cost-low-to-high") api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&sortBy=COST_FOR_TWO&page_type=DESKTOP_WEB_LISTING"
        else if (context.filter === "cost-high-to-low") api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&sortBy=COST_FOR_TWO_H2L&page_type=DESKTOP_WEB_LISTING"
        await axios.get(api).then((data) => {
            if (data) {
                setrestData(data.data.data.cards[5].card.card?.gridElements?.infoWithStyle.restaurants)
                context.setFilteredData(data.data.data.cards[5].card.card?.gridElements?.infoWithStyle.restaurants)
            }
        })
    }

    const searchrest = (e) => {
        const restSearch = e.target.value
        setSearchvalue(restSearch)
        findMatching()
        if (restSearch === "") context.setFilteredData(restData)
    }

    const search = () => {
        console.log(restData.filter((item) => item?.info.name), "mango checking search", searchvalue)
        context.setFilteredData(restData.filter((item) => item?.info.name.toLowerCase().includes(searchvalue.toLowerCase())))
    }

    const setFilterOnClick = (filter) => {
        context.setFilter(filter)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // will be executed whenever sign-in or sing-up is done by the user
                const { uid, email, displayName } = user.uid;
                // passing payload to the action
                dispatch(addUser({ udi: uid, email: email, displayName: displayName }))
                // if the user has an option to update its profile, then dispatch an action again in that component also
                // and in that component work with the (this) updated value of the user using "auth" -> firebase auth
                navigate(-1)
            } else {
                // User is signed out
                dispatch(removeUser())
            }
        });
    }, [])

    return (
        <HeaderDiv>
            <HeaderWrapper>
                <NavbarUL>
                    <LinkStyled to="/"><NavbarLI header="main">HOME</NavbarLI></LinkStyled>
                    <LinkStyled to="/about"><NavbarLI header="main">ABOUT</NavbarLI></LinkStyled>
                    <LinkStyled to="/offers"><NavbarLI header="main">OFFERS</NavbarLI></LinkStyled>
                </NavbarUL>
                <SearchCartWrapper>
                    <SearchWrapper>
                        <Input type="search" placeholder='search' value={searchvalue} onChange={searchrest} />
                        <button onClick={search}>Search</button>
                    </SearchWrapper>
                    <CartWrapper>
                        {user !== "" ? <LoginUser>
                            <UserInfo>
                                <Avatar><i class="fa-solid fa-user"></i></Avatar>
                                <Username>{user}</Username>
                            </UserInfo>
                            <UserDropdown>
                                <ul>
                                    <li>Logout</li>
                                </ul>
                            </UserDropdown>
                        </LoginUser> : <LinkStyled to="/login"><Username>Login</Username></LinkStyled>}
                        <LinkStyled to="/cart"><i class="fa-sharp fa-solid fa-cart-shopping"><CartItemsLength>{items.length}</CartItemsLength></i></LinkStyled>
                    </CartWrapper>
                </SearchCartWrapper>
            </HeaderWrapper>
            <div>
                {searchvalue !== "" ? matchingRest.length !== 0 ? <ul>
                    {matchingRest.map(item => {
                        return (
                            <li>{item}</li>
                        )
                    })}
                </ul> : <span> no results found </span> : null}

            </div>
            <Categories display={linkInfo}>
                <NavbarUL>
                    <LinkStyled to="/"><NavbarLI header="sub" onClick={() => { setFilterOnClick("relevance") }}>RELEVANCE</NavbarLI></LinkStyled>
                    <LinkStyled to="/rating"><NavbarLI header="sub" onClick={() => { setFilterOnClick("rating") }}>RATING</NavbarLI></LinkStyled>
                    <LinkStyled to="/delivery-time"><NavbarLI header="sub" onClick={() => { setFilterOnClick("delivery-time") }}>DELIVERY TIME</NavbarLI></LinkStyled>
                    <LinkStyled to="/cost-low-to-high"><NavbarLI header="sub" onClick={() => { setFilterOnClick("cost-low-to-high") }}>COST: LOW TO HIGH</NavbarLI></LinkStyled>
                    <LinkStyled to="/cost-high-to-low"><NavbarLI header="sub" onClick={() => { setFilterOnClick("cost-high-to-low") }}>COST: HIGH TO LOW</NavbarLI></LinkStyled>
                </NavbarUL>
            </Categories>
            <CategoryLabel display={linkInfo} >{context.filter}</CategoryLabel>
        </HeaderDiv>
    )
}

export default Header

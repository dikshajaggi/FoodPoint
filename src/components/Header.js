import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../utilities/context/UserContext'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"
import "../style.css"
import { Context } from "../utilities/context/Context"
import { Avatar, CartItemsLength, CartWrapper, Categories, CategoryLabel, HeaderDiv, HeaderWrapper, Input, LinkStyled, Location, LoginUser, Logo, LogoutBtn, Name, NavbarLI, NavbarULCat, Offers, SearchBarList, SearchBtn, SearchCartWrapper, SearchListVal, SearchValImg, SearchValWrapper, SearchWrapper, Span, UserDropdown, UserInfo, Username } from './styledComponents/Header'
import { data } from "../assets/data"
import { useLocation } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utilities/firebase'
import { addUser, removeUser } from '../utilities/redux/userSlice'
import { useTheme } from 'styled-components'
import offers from "../assets/offers.png"
import offersAccent from "../assets/offersAccent.png"


const Header = () => {
    const theme = useTheme()
    const { user, setUser } = useContext(UserContext)
    const context = useContext(Context)
    const location = useLocation()
    const dispatch = useDispatch()
    const items = useSelector((store) => store.cart.items)
    const [restData, setrestData] = useState(data)
    const [searchvalue, setSearchvalue] = useState("")
    const [matchingRest, setMatchingRest] = useState([])
    const [closeSearchList, setCloseSearchList] = useState(false)
    const currentPathname = location.pathname;
    const params = useParams()
    const headerPaths = ["/", "/signup", "/login", "/about", "/offers", "/cart", "/fav-restaurant", "/payment"];
    const linkInfo = headerPaths.includes(currentPathname) || currentPathname === `/rest/${params.id}`
        ? "header"
        : "subHeader";

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        // Automatically hide the div after 2 seconds
        setTimeout(() => {
            setIsHovered(false);
        }, 4000);
    };

    const findMatching = (e) => {
        const matching = []
        const value = e.target.value
        console.log(value, "eeeeeeeeee")
        restData?.filter((item) => {
            console.log(item?.info?.name.toLowerCase(), value.toLowerCase(), "item?.info?.name")
            if (item?.info?.name.toLowerCase().includes(value.toLowerCase())) matching.push(item.info)
        })
        console.log(matching, "matchingRest")
        setMatchingRest(matching)
    }

    useEffect(() => {
        console.log(user, "user")
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
        setCloseSearchList(false)

        const restSearch = e.target.value
        console.log(e.target.value, "checking search", restSearch)
        setSearchvalue(restSearch)
        findMatching(e)
        if (restSearch === "") context.setFilteredData(restData)
    }

    const search = () => {
        context.setFilteredData(restData.filter((item) => item?.info.name.toLowerCase().includes(searchvalue.toLowerCase())))
    }

    const setFilterOnClick = (filter) => {
        context.setFilter(filter)
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser())
            window.location.reload()
            console.log("signed-out")
        }).catch((error) => {
            // An error happened.
        });
    }

    const searchRestWithList = () => {
        setCloseSearchList(true)
        context.setFilteredData(restData.filter((item) => item?.info.name.toLowerCase().includes(searchvalue.toLowerCase())))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // will be executed whenever sign-in or sing-up is done by the user
                const { uid, email, displayName } = user.uid;
                // passing payload to the action
                dispatch(addUser({ udi: uid, email: email, displayName: displayName }))
                setUser(user)
            } else {
                // User is signed out
                dispatch(removeUser())
            }
        });
        return () => unsubscribe()
    }, [])

    console.log(context.location, "checking location")

    return (
        <HeaderDiv>
            <HeaderWrapper>
                <LinkStyled to="/" style={{ color: window.location.pathname === "/" ? theme.colors.accent : "black" }}><Logo>HungerBites</Logo></LinkStyled>
                <Location>
                    {localStorage.getItem("location") !== null ? `${localStorage.getItem("location").slice(0, 20)}....` : null} <i class="fa-solid fa-angle-down" style={{ marginLeft: "1vw", marginTop: "4px", color: theme.colors.accent }}></i>
                </Location>
                <SearchWrapper>
                    <Input type="search" list="search-suggestions" placeholder='Search for restaurants' value={searchvalue} onChange={searchrest} />
                    <SearchBtn onClick={search}><i class="fa-solid fa-magnifying-glass"
                        style={{
                            fontSize: "14px",
                            color: 'black',
                            display: searchvalue ? "none" : null
                        }}></i></SearchBtn>
                    {searchvalue !== "" ? matchingRest.length !== 0 ? closeSearchList ? null : <SearchBarList>
                        <ul>
                            {matchingRest.map(item => {
                                return (
                                    <SearchValWrapper onClick={searchRestWithList}>
                                        <SearchValImg src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + item.cloudinaryImageId} alt="" />
                                        <SearchListVal>{item.name}</SearchListVal>
                                    </SearchValWrapper>
                                )
                            })}
                        </ul> </SearchBarList> : <SearchBarList> <Span>no results found </Span></SearchBarList> : null}
                </SearchWrapper>
                <CartWrapper>
                    <Offers>
                        {window.location.pathname === "/offers" ? <img src={offersAccent} alt="" style={{ height: "16px", width: "16px", marginTop: "2px" }} /> : <img src={offers} alt="" style={{ height: "16px", width: "16px", marginTop: "2px" }} />}
                        <LinkStyled to="/offers" style={{ color: window.location.pathname === "/offers" ? theme.colors.accent : "black" }}><NavbarLI header="main">Offers</NavbarLI></LinkStyled>
                    </Offers>
                    {user !== "" ? <LoginUser >
                        <UserInfo onMouseEnter={handleMouseEnter}>
                            <Avatar><i class="fa-solid fa-user" style={{ fontSize: "14px" }}></i></Avatar>
                            <Username>
                                <Name>{user.displayName}</Name>
                                <UserDropdown isHovered={isHovered}>
                                    <LinkStyled option="fav" to="/fav-restaurant">Favourites</LinkStyled>
                                    <LogoutBtn onClick={handleSignOut}>Logout</LogoutBtn>
                                </UserDropdown>
                            </Username>
                        </UserInfo>
                    </LoginUser> : <LinkStyled to="/login"><Username>Login</Username></LinkStyled>}
                    <LinkStyled to="/cart"><i class="fa-sharp fa-solid fa-cart-shopping" style={{ color: items.length === 0 ? "black" : theme.colors.accent, fontSize: "16px" }}><CartItemsLength style={{ color: 'black', fontSize: "12px" }}>{items.length}</CartItemsLength></i></LinkStyled>
                </CartWrapper>
            </HeaderWrapper>

            <Categories display={linkInfo}>
                <NavbarULCat>
                    <LinkStyled to="/" style={{ color: "white", fontWeight: "600" }}><NavbarLI header="sub" onClick={() => { setFilterOnClick("relevance") }}>RELEVANCE</NavbarLI></LinkStyled>
                    <LinkStyled to="/rating" style={{ color: "white", fontWeight: "600" }}><NavbarLI header="sub" onClick={() => { setFilterOnClick("rating") }}>RATING</NavbarLI></LinkStyled>
                    <LinkStyled to="/delivery-time" style={{ color: "white", fontWeight: "600" }}><NavbarLI header="sub" onClick={() => { setFilterOnClick("delivery-time") }}>DELIVERY TIME</NavbarLI></LinkStyled>
                    <LinkStyled to="/cost-low-to-high" style={{ color: "white", fontWeight: "600" }}><NavbarLI header="sub" onClick={() => { setFilterOnClick("cost-low-to-high") }}>COST: LOW TO HIGH</NavbarLI></LinkStyled>
                    <LinkStyled to="/cost-high-to-low" style={{ color: "white", fontWeight: "600" }}><NavbarLI header="sub" onClick={() => { setFilterOnClick("cost-high-to-low") }}>COST: HIGH TO LOW</NavbarLI></LinkStyled>
                </NavbarULCat>
            </Categories>
            <CategoryLabel display={linkInfo} >{context.filter}</CategoryLabel>
        </HeaderDiv>
    )
}

export default Header

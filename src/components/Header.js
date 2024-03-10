import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../utilities/context/UserContext'
import { useDispatch, useSelector } from 'react-redux'
import "../style.css"
import { Context } from "../utilities/context/Context"
import { Avatar, CartItemsLength, CartWrapper, HeaderDiv, HeaderWrapper, Input, LinkStyled, Location, LoginUser, Logo, LogoutBtn, MobileHeader, Name, NavbarLI, Offers, SearchBarList, SearchBtn, SearchListVal, SearchValImg, SearchValWrapper, SearchWrapper, Span, UserDropdown, UserInfo, Username } from './styledComponents/Header'
import data from "../assets/data.json"
// import { useLocation } from 'react-router-dom';
// import { onAuthStateChanged, signOut } from 'firebase/auth'
// import { auth } from '../utilities/firebase'
import { useTheme } from 'styled-components'
import offers from "../assets/images/offers.png"
import offersAccent from "../assets/images/offersAccent.png"
import DrawerComponent from './DrawerComponent'
import specficRest from "../assets/specificRest.json"
import _ from 'lodash'
import { clearCart } from '../utilities/redux/cartSlice'

const Header = () => {
    const theme = useTheme()
    const { user, setUser } = useContext(UserContext)
    const context = useContext(Context)
    // const location = useLocation()
    const navigate = useNavigate()

    const items = useSelector((store) => store.cart.items)
    const [restData, setrestData] = useState(data)
    const [searchvalue, setSearchvalue] = useState("")
    const [matchingRest, setMatchingRest] = useState([])
    const [closeSearchList, setCloseSearchList] = useState(false)
    const [open, setOpen] = useState(false);
    const [searchedDish, setSearchedDish] = useState()
    const [matchingDish, setMatchingDish] = useState()
    // const currentPathname = location.pathname;
    // const params = useParams()
    // const headerPaths = ["/", "/signup", "/login", "/about", "/offers", "/cart", "/fav-restaurant", "/payment"];
    // const linkInfo = headerPaths.includes(currentPathname) || currentPathname === `/rest/${params.id}`
    //     ? "header"
    //     : "subHeader";

    const [isHovered, setIsHovered] = useState(false);
    const dispatch = useDispatch()

    const statusArr = ["placed", "confirmed", "processing", "delivery", "end"]

    const getAllDishes = () => {
        setSearchedDish(specficRest.cards.map(item => item.menu).flat(2))
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
        // Automatically hide the div after 2 seconds
        setTimeout(() => {
            setIsHovered(false);
        }, 4000);
    };

    const findMatching = (e) => {
        const matching = []
        const matchingDish = []
        const value = e.target.value
        restData?.filter((item) => {
            if (item?.name.toLowerCase().includes(value.toLowerCase())) matching.push(item)
            return true
        })

        searchedDish.filter(item => {
            if (item?.name.toLowerCase().includes(value.toLowerCase())) matchingDish.push(item)
            return true
        })
        setMatchingRest(matching)
        setMatchingDish(matchingDish)
    }

    useEffect(() => {
        console.log(user, "user")
        // getRest()
        getAllDishes()
        setrestData(data?.restaurants)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        console.log(context.orderPlaced, "28")
        if (context.orderPlaced) {
            dispatch(clearCart())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context.orderPlaced])

    useEffect(() => {
        if (localStorage.getItem("userDetails")) {
            setUser(JSON.parse(localStorage.getItem("userDetails")))
        }
        if (context.orderPlaced === true) {
            statusArr.map((item, index) => {
                setTimeout(() => {
                    context.setStatus(prev => [...prev, item])
                }, index * 10000)
                return true
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // async function getRest() {
    //     let api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //     if (context.filter === "rating") api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&sortBy=RATING&page_type=DESKTOP_WEB_LISTING"
    //     else if (context.filter === "delivery-time") api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&sortBy=DELIVERY_TIME&page_type=DESKTOP_WEB_LISTING"
    //     else if (context.filter === "cost-low-to-high") api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&sortBy=COST_FOR_TWO&page_type=DESKTOP_WEB_LISTING"
    //     else if (context.filter === "cost-high-to-low") api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&sortBy=COST_FOR_TWO_H2L&page_type=DESKTOP_WEB_LISTING"
    //     await axios.get(api).then((data) => {
    //         if (data) {
    //             setrestData(data.data.data.cards[5].card.card?.gridElements?.infoWithStyle.restaurants)
    //             context.setFilteredData(data.data.data.cards[5].card.card?.gridElements?.infoWithStyle.restaurants)
    //         }
    //     })
    // }

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const searchrest = (e) => {
        setCloseSearchList(false)

        const restSearch = e.target.value
        console.log(e.target.value, "checking search", restSearch)
        setSearchvalue(restSearch)
        findMatching(e)
        if (restSearch === "") context.setFilteredData(restData)
    }

    const search = () => {
        context.setSearched(true)
        context.setFilteredData(restData.filter((item) => item.name.toLowerCase().includes(searchvalue.toLowerCase())))
    }

    // const setFilterOnClick = (filter) => {
    //     context.setFilter(filter)
    // }

    const handleSignOut = () => {
        // signOut(auth).then(() => {
        //     dispatch(removeUser())
        //     window.location.reload()
        //     console.log("signed-out")
        // }).catch((error) => {
        //     // An error happened.
        // });
        navigate("/login")
        setUser(null)
    }

    const searchRestWithList = () => {
        const restaurants = []
        console.log(matchingDish, "getting matching dish", restData)
        context.setSearched(true)
        setCloseSearchList(true)
        if (matchingDish.length !== 0) {
            const names = matchingDish.map(item => item.name)
            function findRestaurantName(dishName) {
                const restaurant = _.find(specficRest.cards, restaurant => {
                    return _.some(restaurant.menu, { 'name': dishName });
                });
                return restaurant ? restaurant.name : "Restaurant not found";
            }

            for (const dish of names) {
                const restaurantName = findRestaurantName(dish);
                restaurants.push(restaurantName)
            }

            console.log(names, "line138", restaurants);


            console.log(restData.filter((item) => restaurants.includes(item?.name.toLowerCase())), "line138")
            context.setFilteredData(restData.filter((item) => restaurants.includes(item?.name)))
        } else context.setFilteredData(restData.filter((item) => item?.name.toLowerCase().includes(searchvalue.toLowerCase())))
    }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             // will be executed whenever sign-in or sing-up is done by the user
    //             const { uid, email, displayName } = user.uid;
    //             // passing payload to the action
    //             dispatch(addUser({ udi: uid, email: email, displayName: displayName }))
    //             setUser(user)
    //         } else {
    //             // User is signed out
    //             dispatch(removeUser())
    //         }
    //     });
    //     return () => unsubscribe()
    // }, [])

    console.log(context.location, "checking location")

    return (
        <HeaderDiv>
            <HeaderWrapper>
                <LinkStyled to="/" style={{ color: window.location.pathname === "/" ? theme.colors.accent : "black" }}><Logo>HungerBites</Logo></LinkStyled>
                <Location onClick={toggleDrawer}>
                    {localStorage.getItem("location") !== null ? `${localStorage.getItem("location").slice(0, 20)}....` : null} <i class="fa-solid fa-angle-down" style={{ marginLeft: "1vw", marginTop: "4px", color: theme.colors.accent, cursor: "pointer" }}></i>
                </Location>
                <DrawerComponent open={open} setOpen={setOpen} />
                <SearchWrapper>
                    <Input type="search" list="search-suggestions" placeholder='Search...' value={searchvalue} onChange={searchrest} />
                    <SearchBtn onClick={search}><i class="fa-solid fa-magnifying-glass"
                        style={{
                            fontSize: "14px",
                            color: 'black',
                            display: searchvalue ? "none" : null
                        }}></i></SearchBtn>
                    {searchvalue !== "" ? matchingRest.length !== 0 || matchingDish.length !== 0 ? closeSearchList ? null : <SearchBarList>
                        <ul>
                            {console.log(matchingDish, "matchingDishmatchingDish")}
                            {matchingDish.length === 0 ? matchingRest.map(item => {
                                return (
                                    <SearchValWrapper onClick={searchRestWithList}>
                                        <SearchValImg src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + item.cloudinaryImageId} alt="" />
                                        <SearchListVal>{item.name}</SearchListVal>
                                    </SearchValWrapper>
                                )
                            }) : matchingDish.map(item => {
                                return (
                                    <SearchValWrapper onClick={searchRestWithList}>
                                        <SearchValImg src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + item.imageId} alt="" />
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
                                <Name>{user.name}</Name>
                                <UserDropdown isHovered={isHovered}>
                                    <LinkStyled style={{ fontSize: "14px" }} to="/orders">Orders</LinkStyled>
                                    <LinkStyled option="fav" to="/fav-restaurant">Favourites</LinkStyled>
                                    <LogoutBtn onClick={handleSignOut}>Logout</LogoutBtn>
                                </UserDropdown>
                            </Username>
                        </UserInfo>
                    </LoginUser> : <LinkStyled to="/login"><Username>Login</Username></LinkStyled>}
                    <LinkStyled to="/cart"><i class="fa-sharp fa-solid fa-cart-shopping" style={{ color: items.length === 0 ? "black" : theme.colors.accent, fontSize: "16px" }}><CartItemsLength style={{ color: 'black', fontSize: "12px" }}>{items.length}</CartItemsLength></i></LinkStyled>
                </CartWrapper>
            </HeaderWrapper>

            {/* <Categories display={linkInfo}>
                <NavbarULCat>
                    <LinkStyled to="/" style={{ color: "white", fontWeight: "600" }}><NavbarLI header="sub" onClick={() => { setFilterOnClick("relevance") }}>RELEVANCE</NavbarLI></LinkStyled>
                    <LinkStyled to="/rating" style={{ color: "white", fontWeight: "600" }}><NavbarLI header="sub" onClick={() => { setFilterOnClick("rating") }}>RATING</NavbarLI></LinkStyled>
                    <LinkStyled to="/delivery-time" style={{ color: "white", fontWeight: "600" }}><NavbarLI header="sub" onClick={() => { setFilterOnClick("delivery-time") }}>DELIVERY TIME</NavbarLI></LinkStyled>
                    <LinkStyled to="/cost-low-to-high" style={{ color: "white", fontWeight: "600" }}><NavbarLI header="sub" onClick={() => { setFilterOnClick("cost-low-to-high") }}>COST: LOW TO HIGH</NavbarLI></LinkStyled>
                    <LinkStyled to="/cost-high-to-low" style={{ color: "white", fontWeight: "600" }}><NavbarLI header="sub" onClick={() => { setFilterOnClick("cost-high-to-low") }}>COST: HIGH TO LOW</NavbarLI></LinkStyled>
                </NavbarULCat>
            </Categories> */}
            {/* <CategoryLabel display={linkInfo} >{context.filter}</CategoryLabel> */}
            <MobileHeader>
                <LinkStyled to="/login"><Username style={{ fontSize: "14px", color: "#fff", textTransform: "capitalize" }}> {user !== "" ? user.name : "Login"} </Username></LinkStyled>
                {user !== "" ? <>
                    <LinkStyled style={{ fontSize: "14px", color: "#fff" }} to="/orders">Orders</LinkStyled>
                    <LogoutBtn style={{ fontSize: "14px", color: "#fff" }} onClick={handleSignOut}>Logout</LogoutBtn>
                    <LinkStyled style={{ fontSize: "14px", color: "#fff" }} option="fav" to="/fav-restaurant">Favourites</LinkStyled></> : null}
                <LinkStyled to="/offers" style={{ fontSize: "14px", color: "#fff" }}>Offers</LinkStyled>
                <LinkStyled style={{ fontSize: "14px", color: "#fff" }} to="/cart"><CartItemsLength>Cart {items.length}</CartItemsLength></LinkStyled>
            </MobileHeader>
        </HeaderDiv>
    )
}

export default Header

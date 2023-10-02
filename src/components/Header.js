import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../utilities/context/UserContext'
import { useSelector } from 'react-redux'
import axios from "axios"
import "../style.css"
import { Context } from "../utilities/context/Context"
import { Categories, CategoryLabel, HeaderWrapper, LinkStyled, NavbarLI, NavbarUL } from './styledComponents/Header'
import { data } from "../assets/data"
import { useLocation } from 'react-router-dom';


const Header = () => {
    const { user, setUser } = useContext(UserContext)
    const context = useContext(Context)
    const location = useLocation()

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
    return (
        <div className='header'>
            <HeaderWrapper>
                <NavbarUL>
                    <LinkStyled to="/" className='link'><NavbarLI header="main">HOME</NavbarLI></LinkStyled>
                    <LinkStyled to="/about" className='link'><NavbarLI header="main">ABOUT</NavbarLI></LinkStyled>
                    <LinkStyled to="/offers" className='link'><NavbarLI header="main">OFFERS</NavbarLI></LinkStyled>
                </NavbarUL>
                <div className='search-cart-wrapper'>
                    <div className='search-wrapper'>
                        <input type="search" className='search-box' placeholder='search' value={searchvalue} onChange={searchrest} />
                        <button onClick={search}>Search</button>
                    </div>
                    <div className='cart-wrapper'>
                        {user !== "" ? <div className='login-user'>
                            <div className='userInfo'>
                                <button className='avatar'><i class="fa-solid fa-user"></i></button>
                                <h3 className="username">{user}</h3>
                            </div>
                            <div className='user-dropdown'>
                                <ul>
                                    <li>Logout</li>
                                </ul>
                            </div>
                        </div> : <Link to="/login" className='link'><h3 className="username">Login</h3></Link>}
                        <Link to="/cart" className='link'><i class="fa-sharp fa-solid fa-cart-shopping"><span className='cart-items-length'>{items.length}</span></i></Link>
                    </div>
                </div>
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
        </div>
    )
}

export default Header

import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import data from "../assets/data.json"
import { Input, SearchBarList, SearchBtn, SearchListVal, SearchValImg, SearchValWrapper, SearchWrapper, Span } from './styledComponents/Header'
import { Context } from '../utilities/context/Context'
import langConfig from "../config/langConfig.json"
import specficRest from "../assets/specificRest.json"
import _ from 'lodash'

const Search = () => {
    const context = useContext(Context)
    const location = useLocation()
    const [restData, setrestData] = useState(data)
    const [searchvalue, setSearchvalue] = useState("")
    const [matchingRest, setMatchingRest] = useState([])
    const [closeSearchList, setCloseSearchList] = useState(false)
    const [searchedDish, setSearchedDish] = useState()
    const [matchingDish, setMatchingDish] = useState()
    const currentPathname = location.pathname;
    const params = useParams()
    const headerPaths = ["/signup", "/login", `/rest/${params.id}`, "/about", "/privacy-policy", "/terms_conditions", "/disclaimer", "/map", "/cart", "/fav-restaurant", "/payment", "/orders"];
    const linkInfo = headerPaths.includes(currentPathname) ? "noSearch" : "search";
    const langConfigHeader = langConfig[0].header

    const getAllDishes = () => {
        setSearchedDish(specficRest.cards.map(item => item.menu).flat(2))
    }

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

    useEffect(() => {
        getAllDishes()
        setrestData(data?.restaurants)
    }, [])

  return (
    <div>
            <SearchWrapper show={linkInfo === "search" ? "true" : "false"}>
                    <Input type="search" list="search-suggestions" placeholder={context.language === "en" ? langConfigHeader.search.en : langConfigHeader.search.hn} value={searchvalue} onChange={searchrest} />
                    <SearchBtn onClick={search}><i class="fa-solid fa-magnifying-glass"
                        style={{
                            fontSize: "14px",
                            color: '#D0D0D0',
                            display: searchvalue ? "none" : null
                        }}></i></SearchBtn>
                    {searchvalue !== "" ? matchingRest.length !== 0 || matchingDish.length !== 0 ? closeSearchList ? null : <SearchBarList>
                        <ul>
                            {console.log(matchingDish, "matchingDishmatchingDish")}
                            {matchingDish.length === 0 ? matchingRest.map(item => {
                                return (
                                    <SearchValWrapper onClick={searchRestWithList}>
                                        <SearchValImg src={require(`../assets/rest_imgs/${item.image}`)} alt={item.image} />
                                        <SearchListVal>{item.name}</SearchListVal>
                                    </SearchValWrapper>
                                )
                            }) : matchingDish.map(item => {
                                return (
                                    <SearchValWrapper onClick={searchRestWithList}>
                                        <SearchValImg src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + item.imageId} alt="image" />
                                        <SearchListVal>{item.name}</SearchListVal>
                                    </SearchValWrapper>
                                )
                            })}
                        </ul> </SearchBarList> : <SearchBarList> <Span>{context.language === "en" ? langConfigHeader.no_search_result.en : langConfigHeader.no_search_result.hn}</Span></SearchBarList> : null}
                </SearchWrapper>
    </div>
  )
}

export default Search

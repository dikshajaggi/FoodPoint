import React, { useContext, useEffect, useState } from 'react'
import Card from '../components/PizzaCard'
import "../style.css"
import axios from "axios"
import { Link } from 'react-router-dom'
import Header from "../components/Header"
import { Context } from '../utilities/context/Context'

const Main = () => {
    const props = useContext(Context)

    async function getRest() {
        let api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        if (props.filter === "rating") api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&sortBy=RATING&page_type=DESKTOP_WEB_LISTING"
        else if (props.filter === "delivery-time") api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&sortBy=DELIVERY_TIME&page_type=DESKTOP_WEB_LISTING"
        else if (props.filter === "cost-low-to-high") api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&sortBy=COST_FOR_TWO&page_type=DESKTOP_WEB_LISTING"
        else if (props.filter === "cost-high-to-low") api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&sortBy=COST_FOR_TWO_H2L&page_type=DESKTOP_WEB_LISTING"

        await axios.get(api).then((data) => {
            console.log(data, "swiggy api")
            if (props.filter === "rating") {
                props.setrestData(data?.data?.data?.cards[0]?.data?.data?.cards)
                props.setFilteredData(data?.data?.data?.cards[0]?.data?.data?.cards)
            }
            else {
                console.log(data.data.data.cards[5].card.card.gridElements.infoWithStyle.restaurants, "swiggy checking api")
                props.setrestData(data.data.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
                props.setFilteredData(data.data.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
            }
        })
    }


    useEffect(() => {
        getRest()
    }, [props.filter])

    return (
        <div className='main-wrapper'>
            <Header />
            <div className='card-wrapper'>
                {console.log(props?.filteredData, "swiggy filtered data")}
                {props?.filteredData?.map((item) => {
                    console.log(item, "swiggy filtered item")
                    if (props.filter === "rating") console.log("item check", item?.info?.feeDetails, "rest_id")
                    return props.filter === "rating" ? <Link to={`/rest/${item.info?.feeDetails?.restaurantId}`} style={{ textDecoration: 'none' }} > < Card {...item?.info} /></Link> : <Link to={`/rest/${item?.info?.feeDetails?.restaurantId}`} style={{ textDecoration: 'none' }} > < Card {...item?.info} /></Link>

                })}
            </div>
        </div>
    )
}

export default Main

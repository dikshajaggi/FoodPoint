import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import "../style.css"
import axios from "axios"
import { Link } from 'react-router-dom'
import { UserContext } from '../Utility/Context/UserContext'
import { useSelector } from 'react-redux'
import { Context } from '../Utility/Context/Context'
import Header from './Layout/Header'




const Main = () => {
    const props = useContext(Context)

    useEffect(() => {
        getRest()
    }, [props.filter])

    async function getRest() {
        let api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
        if (props.filter === "rating") api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&sortBy=RATING&page_type=DESKTOP_WEB_LISTING"
        else if (props.filter === "delivery-time") api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&sortBy=DELIVERY_TIME&page_type=DESKTOP_WEB_LISTING"
        else if (props.filter === "cost-low-to-high") api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&sortBy=COST_FOR_TWO&page_type=DESKTOP_WEB_LISTING"
        else if (props.filter === "cost-high-to-low") api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&sortBy=COST_FOR_TWO_H2L&page_type=DESKTOP_WEB_LISTING"

        await axios.get(api).then((data) => {
            if (props.filter === "rating") {
                props.setrestData(data?.data?.data?.cards[0]?.data?.data?.cards)
                props.setFilteredData(data?.data?.data?.cards[0]?.data?.data?.cards)
            }
            else {
                props.setrestData(data?.data?.data?.cards)
                props.setFilteredData(data?.data?.data?.cards)
            }
        })
    }

    return (
        <div className='main-wrapper'>
            <Header />
            <div className='card-wrapper'>
                {console.log(props.filteredData, "filtered data")}
                {props.filteredData.map((item) => {
                    if (props.filter === "rating") console.log("item check", item.data.sla, "rest_id")
                    return props.filter === "rating" ? <Link to={`/rest/${item.data?.sla?.restaurantId}`} style={{ textDecoration: 'none' }} > < Card {...item.data} /></Link> : <Link to={`/rest/${item.data.data?.sla?.restaurantId}`} style={{ textDecoration: 'none' }} > < Card {...item.data.data} /></Link>

                })}
            </div>
        </div>
    )
}

export default Main

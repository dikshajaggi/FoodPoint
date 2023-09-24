import axios from "axios"
import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../utilities/context/UserContext'
import useAvailable from '../hooks/isAvailable'
import "../style.css"
import SpecificCard from '../components/RestCardforCart'
import Header from "../components/Header"
import SpecificRest from "../shimmerUI/SpecificRest"
import { data } from "../assets/data"
import SpecificPage from "../shimmerUI/SpecificPage"

const Specific = () => {
    const rest_id = useParams()
    const [info, setInfo] = useState({})
    const [otherInfo, setOtherInfo] = useState()
    const [title, setTitle] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
            getData()
        }, 2000);
    }, [])

    async function getData() {
        // const rest_id = 348417
        //https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=348417&submitAction=ENTER`
        await axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${rest_id.id}&submitAction=ENTER`).then((item) => {
            console.log(item.data.data.cards[2], "data specific")
            setInfo(item.data.data.cards[0].card.card.info)
            setOtherInfo(item?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards)
            console.log(item?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.title)
            setTitle(item?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.title)
        })
    }

    const available = useAvailable(info?.availability?.opened)

    const items = useSelector((store) => store.cart.items)
    console.log(items, items.length, "checking items in store")

    return (
        <div className='specific-wrapper'>
            <Header />
            <div className='specific-card'>
                {isLoading ? <SpecificPage /> :
                    <>
                        <h2 className='specifc-heading'>{info?.name}</h2>
                        <h2 className='specific-card-subheading'>{info?.cuisines?.join(", ")} | {info?.areaName} | <i class="fa-regular fa-star"></i>{info?.avgRating}</h2>
                        <h2 className='specific-card-subheading'> {available}</h2>

                        <h4 className='menu-heading'>MENU</h4>
                        <h4 className='menu-category'>{title}</h4>
                    </>
                }

                <div className='menu-all-cards'>
                    {isLoading ? data?.map(item => {
                        return <SpecificRest />
                    }) : otherInfo?.map(dish => (
                        <SpecificCard {...dish?.card?.info} />
                    ))}
                </div>
            </div >
        </div>
    )
}

export default Specific

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
import { AllMenuCards, MenuCategory, MenuHeading, SpecificCardStyle, SpecificCardSubHeading, SpecificHeading, SpecificWrapper } from "./styledComponents/SpecificRestDetail"

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
        <SpecificWrapper>
            <Header />
            <SpecificCardStyle>
                {isLoading ? <SpecificPage /> :
                    <>
                        <SpecificHeading>{info?.name}</SpecificHeading>
                        <SpecificCardSubHeading>{info?.cuisines?.join(", ")} | {info?.areaName} | <i class="fa-regular fa-star"></i>{info?.avgRating}</SpecificCardSubHeading>
                        <SpecificCardSubHeading> {available}</SpecificCardSubHeading>
                        <hr></hr>
                        <MenuHeading>MENU</MenuHeading>
                        <MenuCategory>{title}</MenuCategory>
                    </>
                }

                <AllMenuCards>
                    {isLoading ? data?.map(item => {
                        // RETURNING SHIMMER UI
                        return <SpecificRest />
                    }) : otherInfo?.map(dish => (
                        <SpecificCard {...dish?.card?.info} />
                    ))}
                </AllMenuCards>
            </SpecificCardStyle>
        </SpecificWrapper>
    )
}

export default Specific

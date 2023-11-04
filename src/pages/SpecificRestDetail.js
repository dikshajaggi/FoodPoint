import axios from "axios"
import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useAvailable from '../hooks/isAvailable'
import "../style.css"
import SpecificCard from '../components/RestCardforCart'
import Header from "../components/Header"
import SpecificRest from "../shimmerUI/SpecificRest"
import { data } from "../assets/data"
import SpecificPage from "../shimmerUI/SpecificPage"
import { AllMenuCards, HeaderDiv, HeaderLeft, HeaderRight, MenuCategory, MenuHeading, SpecificCardStyle, SpecificCardSubHeading, SpecificHeading, SpecificWrapper } from "./styledComponents/SpecificRestDetail"
import Footer from "../components/Footer"
import { useTheme } from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Context } from "../utilities/context/Context"
import { UserContext } from "../utilities/context/UserContext"

const Specific = () => {
    const rest_id = useParams()
    const { user } = useContext(UserContext)
    const [info, setInfo] = useState({})
    const [otherInfo, setOtherInfo] = useState()
    const [title, setTitle] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const available = useAvailable(info?.availability?.opened)
    const theme = useTheme()
    const context = useContext(Context)
    const [marked, setMarked] = useState()

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
            console.log(item.data.data.cards[2], "marked rest data specific")
            setInfo(item.data.data.cards[0].card.card.info)
            showFav(item.data.data.cards[0].card.card.info)
            setOtherInfo(item?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards)
            console.log(item?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.title)
            setTitle(item?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.title)
        })
    }


    const handleMarkedFav = (rest) => {
        if (marked) setMarked(false)
        else {
            setMarked(true)
            context.favRest.push(info)
        }
    }

    const showFav = (info) => {
        const idArray = context.favRest.map(item => item.id)
        if (idArray.includes(info.id)) setMarked(true)
    }

    useEffect(() => {
        if (marked === false) {
            const idArray = context.favRest.map(item => item.id)
            if (idArray.includes(info.id)) {
                const data = context.favRest.filter(item => item.id !== info.id)
                context.setFavRest(data)
            }
        }
    }, [marked])

    return (
        <SpecificWrapper>
            <Header />
            <SpecificCardStyle>
                {isLoading ? <SpecificPage /> :
                    <>
                        <HeaderDiv>
                            <HeaderLeft>
                                <SpecificHeading>{info?.name}</SpecificHeading>
                                <SpecificCardSubHeading>{info?.cuisines?.join(", ")}</SpecificCardSubHeading>
                                <SpecificCardSubHeading>{info?.areaName} | {info?.sla?.slaString}</SpecificCardSubHeading>
                            </HeaderLeft>

                            <HeaderRight>
                                <SpecificCardSubHeading>
                                    {user !== "" ? <>
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            className="fa-regular fa-heart"
                                            style={{ marginRight: "1vw", color: marked ? theme.colors.accent : "black", cursor: "pointer" }}
                                            onClick={(e) => handleMarkedFav(info, e)} />
                                        | <i class="fa-solid fa-star" style={{ color: "#3d9b6d", marginLeft: "1vw" }}></i><span style={{ color: "#3d9b6d" }}>{info?.avgRating}</span>
                                    </> : <>
                                        <i class="fa-solid fa-star" style={{ color: "#3d9b6d", marginLeft: "1vw" }}></i><span style={{ color: "#3d9b6d" }}>{info?.avgRating}</span>
                                    </>}
                                </SpecificCardSubHeading>
                                <SpecificCardSubHeading> {available}</SpecificCardSubHeading>
                            </HeaderRight>
                        </HeaderDiv>
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
            <Footer />
        </SpecificWrapper>
    )
}

export default Specific

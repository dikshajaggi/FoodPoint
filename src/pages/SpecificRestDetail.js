import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useAvailable from '../hooks/isAvailable'
import "../style.css"
import SpecificCard from '../components/RestCardforCart'
import Header from "../components/Header"
import SpecificRest from "../shimmerUI/SpecificRest"
import data from "../assets/specificRest.json"
import details from "../assets/data.json"
import SpecificPage from "../shimmerUI/SpecificPage"
import { AllMenuCards, HeaderDiv, HeaderLeft, HeaderRight, MenuHeading, SpecificCardStyle, SpecificCardSubHeading, SpecificHeading, SpecificWrapper } from "./styledComponents/SpecificRestDetail"
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
    const [isLoading, setIsLoading] = useState(true)
    const available = useAvailable(info?.availability?.opened)
    const theme = useTheme()
    const [specifcRestInfo, setSpecifcRestInfo] = useState()
    const context = useContext(Context)
    const [marked, setMarked] = useState()
    console.log(data, rest_id)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
            getData()
        }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function getData() {
        // const rest_id = 348417
        //https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=348417&submitAction=ENTER`
        // await axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${rest_id.id}&submitAction=ENTER`).then((item) => {
        //     console.log(item.data.data.cards[2], "marked rest data specific")
        //     setInfo(item.data.data.cards[0].card.card.info)
        //     showFav(item.data.data.cards[0].card.card.info)
        //     setOtherInfo(item?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards)
        //     console.log(item?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.title)
        //     setTitle(item?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.title)
        // })
        setInfo(data?.cards)
        setSpecifcRestInfo(data?.cards.filter(item => item.id.toString() === rest_id.id))
    }


    const handleMarkedFav = (rest) => {
        const data = details.restaurants.filter(item => item.id === rest.id.toString())
        if (marked) setMarked(false)
        else {
            setMarked(true)
            context.favRest.push(data)
        }
    }

    // const showFav = (info) => {
    //     const idArray = context.favRest.map(item => item.id)
    //     if (idArray.includes(info.id)) setMarked(true)
    // }

    useEffect(() => {
        if (marked === false) {
            const idArray = context.favRest.map(item => item.id)
            if (idArray.includes(info.id)) {
                const data = context.favRest.filter(item => item.id !== info.id)
                context.setFavRest(data)
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [marked])

    return (
        <SpecificWrapper>
            <Header />
            <SpecificCardStyle>
                {isLoading ? <SpecificPage /> :
                    <>
                        <HeaderDiv>
                            <HeaderLeft>
                                <SpecificHeading>{specifcRestInfo[0]?.name}</SpecificHeading>
                                {/* <SpecificCardSubHeading>{specifcRestInfo[0]?.avgRating}</SpecificCardSubHeading> */}
                                <SpecificCardSubHeading>{specifcRestInfo[0]?.sla?.slaString}</SpecificCardSubHeading>
                            </HeaderLeft>

                            <HeaderRight>
                                <SpecificCardSubHeading>
                                    {user !== "" ? <>
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            className="fa-regular fa-heart"
                                            style={{ marginRight: "1vw", color: marked ? theme.colors.accent : "black", cursor: "pointer" }}
                                            onClick={(e) => handleMarkedFav(specifcRestInfo[0], e)} />
                                        | <i class="fa-solid fa-star" style={{ color: "#3d9b6d", marginLeft: "1vw" }}></i><span style={{ color: "#3d9b6d" }}>{specifcRestInfo[0]?.avgRating}</span>
                                    </> : <>
                                        <i class="fa-solid fa-star" style={{ color: "#3d9b6d", marginLeft: "1vw" }}></i><span style={{ color: "#3d9b6d" }}>{specifcRestInfo[0]?.avgRating}</span>
                                    </>}
                                </SpecificCardSubHeading>
                                <SpecificCardSubHeading> {available}</SpecificCardSubHeading>
                            </HeaderRight>
                        </HeaderDiv>
                        <hr></hr>
                        <MenuHeading>MENU</MenuHeading>
                        {/* <MenuCategory>{title}</MenuCategory> */}
                    </>
                }
                {console.log(specifcRestInfo, "specifcRestInfo")}

                <AllMenuCards>
                    {isLoading ? data.cards?.map(item => {
                        // RETURNING SHIMMER UI
                        return <SpecificRest />
                    }) : specifcRestInfo[0].menu?.map((item) => {
                        // const modifiedInfo = { ...dish.card.info, restId: rest_id.id };
                        return (
                            <SpecificCard {...item} />
                        )
                    })}
                </AllMenuCards>
            </SpecificCardStyle>
            <Footer />
        </SpecificWrapper>
    )
}

export default Specific

import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useAvailable from '../hooks/isAvailable'
import "../style.css"
import SpecificCard from '../components/RestCardforCart'
import Header from "../components/Header"
import SpecificRest from "../shimmerUI/SpecificRest"
import data from "../assets/specificRest.json"
import SpecificPage from "../shimmerUI/SpecificPage"
import { AllMenuCards, HeaderDiv, HeaderLeft, HeaderRight, MenuHeading, SpecificCardStyle, SpecificCardSubHeading, SpecificHeading, SpecificWrapper } from "./styledComponents/SpecificRestDetail"
import Footer from "../components/Footer"
import { useTheme } from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { UserContext } from "../utilities/context/UserContext"
import api from '../utilities/api'
import axios from 'axios'
import { toast } from 'react-toastify'

const Specific = () => {
    const { id } = useParams()

    const { userData, userId } = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true)
    const [specifcRestInfo, setSpecifcRestInfo] = useState({
        _id: "6662ece16f54fdf1490ad49f",
        id: "423775",
        name: "Dough & Cream",
        cloudinaryImageId: "ryp5qgrhm2hdshunww2t",
        image: "doughandcream.png",
        locality: "Chaudhary Balbir Singh Marg",
        areaName: "Paschim Vihar",
        costForTwo: "₹250 for two",
        cuisines: [
            "Bakery",
            "Desserts",
            "Snacks",
            "Pizzas"
        ],
        avgRating: 4.1,
        parentId: "11127",
        avgRatingString: "4.1",
        totalRatingsString: "1K+",
        sla: {
            deliveryTime: 27,
            lastMileTravel: 4.9,
            serviceability: "SERVICEABLE",
            slaString: "27 mins",
            lastMileTravelString: "4.9 km",
            iconType: "ICON_TYPE_EMPTY",
            _id: "6662ece16f54fdf1490ad4a0"
        },
        availability: {
            nextCloseTime: "2024-02-08T17:30:00.000Z",
            opened: true,
            _id: "6662ece16f54fdf1490ad4a1"
        },
        isOpen: true,
        type: "F",
        aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
            _id: "6662ece16f54fdf1490ad4a2"
        },
        __v: 18,
        menu: [
            {
                id: "92410406",
                name: "Pizza Parcel",
                description: "Serves 1",
                price: 10000,
                category: "Baked Savoury Snacks - Ready To Eat",
                inStock: 1,
                _id: "666b24b97524952433ecf67b"
            },
            {
                id: "109573671",
                name: "Paneer Tikka Footlong Sub",
                description: "Serves 1",
                price: 10000,
                category: "Baked Savoury Snacks - Ready To Eat",
                inStock: 1,
                _id: "666b24c67524952433ecf67f"
            },
            {
                id: "77794496",
                name: "Peri Peri Chicken Roll",
                description: "Serves 1",
                price: 12000,
                category: "Baked Savoury Snacks - Ready To Eat",
                inStock: 1,
                _id: "666b24d27524952433ecf684"
            },
            {
                id: "77794498",
                name: "Tandoori Chaap Roll",
                description: "Serves 1",
                price: 10000,
                category: "Baked Savoury Snacks - Ready To Eat",
                inStock: 1,
                _id: "666b24df7524952433ecf68a"
            },
            {
                id: "79827762",
                name: "Chicken Wrap",
                description: "Serves 1 | Chicken wrapped with tandoori mayo stuffed in our signature wrap",
                price: 15000,
                category: "Baked Savoury Snacks - Ready To Eat",
                inStock: 1,
                _id: "666b24ed7524952433ecf691"
            },
            {
                id: "77793825",
                name: "Mexican Cheese Roll",
                description: "Serves 1 | Soft bread roll filled with mexican vegetable fillings and cheese",
                price: 12000,
                category: "Baked Savoury Snacks - Ready To Eat",
                inStock: 1,
                _id: "666b24fc7524952433ecf699"
            },
            {
                id: "77793826",
                name: "Mushroom Roll",
                description: "Serves 1 | Soft bread roll filled with mushroom and veggies",
                price: 10000,
                category: "Baked Savoury Snacks - Ready To Eat",
                imageId: "w1nidoouhp7t1lztvoz0",
                inStock: 1,
                _id: "666b25097524952433ecf6a2"
            },
            {
                id: "77793866",
                name: "Chilli Paneer Kathi Roll",
                description: "Serves 1 | Indo chinise style, paneer tossed with veggies in chilli sauce, wrapped in a roll",
                price: 13000,
                category: "Baked Savoury Snacks - Ready To Eat",
                imageId: "ta4ei7z2retctqumutq9",
                inStock: 1,
                _id: "666b25177524952433ecf6ac"
            },
            {
                id: "59685765",
                name: "Chicken Shawarma (6 inches)",
                description: "Serves 1 | Juicy chicken marinated in a blend of Middle Eastern spices in a wrap",
                price: 15000,
                category: "Baked Savoury Snacks - Ready To Eat",
                imageId: "rfl2ezmhbb1in0ysbwle",
                inStock: 1,
                _id: "666b25237524952433ecf6b7"
            },
            {
                id: "59686077",
                name: "Paneer Shawarma",
                description: "Serves 1 | Spiced and flavourful cottage cheese wrap(6 Inches)",
                price: 12000,
                category: "Baked Savoury Snacks - Ready To Eat",
                inStock: 1,
                _id: "666b252f7524952433ecf6c3"
            },
            {
                id: "77794515",
                name: "Masala Sandwich",
                description: "Serves 1",
                price: 11000,
                category: "Baked Savoury Snacks - Ready To Eat",
                inStock: 1,
                _id: "666b25427524952433ecf6d0"
            },
            {
                id: "92410476",
                name: "Mexican Sandwich",
                description: "Serves 1",
                price: 11000,
                category: "Baked Savoury Snacks - Ready To Eat",
                inStock: 1,
                _id: "666b25547524952433ecf6de"
            },
            {
                id: "59686074",
                name: "Roasted Chicken Sandwich",
                description: "Serves 1 | Classic white bread sandwich filled with roasted chicken",
                price: 16000,
                category: "Baked Savoury Snacks - Ready To Eat",
                imageId: "g250fpqi2s6ugfp5zmj3",
                inStock: 1,
                _id: "666b25627524952433ecf6ed"
            },
            {
                id: "81324256",
                name: "Mumbaiya Vada Pao",
                description: "Serves 1",
                price: 7000,
                category: "Baked Savoury Snacks - Ready To Eat",
                imageId: "zpfw3fmkksbzixvfm2rx",
                inStock: 1,
                _id: "666b25707524952433ecf6fd"
            },
            {
                id: "77793824",
                name: "Cheese Burger",
                description: "Serves 1 | Classic burger with crunchy veg patty, veggies, sauces and cheese",
                price: 10000,
                category: "Baked Savoury Snacks - Ready To Eat",
                inStock: 1,
                _id: "666b25857524952433ecf70e"
            },
            {
                id: "59685859",
                name: "Veg Burger",
                description: "Serves 1 | Classic burger with crunchy veg patty, veggies and sauces",
                price: 9000,
                category: "Baked Savoury Snacks - Ready To Eat",
                imageId: "j109enfwoxadaqrf7do8",
                inStock: 1,
                _id: "666b25927524952433ecf720"
            },
            {
                id: "59685861",
                name: "Chicken Burger",
                description: "Serves 1 | A perfect snack if you're craving a crispy chicken burger",
                price: 13000,
                category: "Baked Savoury Snacks - Ready To Eat",
                inStock: 1,
                _id: "666b25a07524952433ecf733"
            },
            {
                id: "77793828",
                name: "Veg Hot Dog",
                description: "Serves 1 | Classic hot dog bun filled with veg nuggets and sauces",
                price: 9000,
                category: "Baked Savoury Snacks - Ready To Eat",
                inStock: 1,
                _id: "666b25ae7524952433ecf747"
            }
        ]
    })
    const available = useAvailable(specifcRestInfo?.availability?.opened)
    const theme = useTheme()
    // const context = useContext(Context)
    const [marked, setMarked] = useState(false)
    const [fav, setFav] = useState([])

    const showfavRest = async () => {
        await api.allFavRest(userId).then(data => setFav(data.items))
    }

    const fetchRestData = async () => {
        await api.specRestData(id).then(data => {
            setSpecifcRestInfo(data)
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
            fetchRestData()
            showfavRest()
        }, 2000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId])

    useEffect(() => {
        if (fav.length !== 0) {
            // eslint-disable-next-line array-callback-return
            fav.filter(item => {
                if (item.restId === id) setMarked(true)
            })
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [specifcRestInfo])


    const handleMarkedFav = async (rest) => {
        const obj = {
            userId,
            restId: rest._id
        }
        if (marked === false) {
            const res = await api.addFavRest(obj)
            if (res.status === 200) {
                // const data = details.restaurants.filter(item => item.id === rest.id.toString())
                // context.favRest.push(data)
                setMarked(true)
                toast.success("Restaurant added to favourites");
            }
        } else if (marked) {
            await axios.delete('http://localhost:8000/api/remove-favrest', {
                headers: {
                    'Content-Type': 'application/json',
                },
                data: obj
            })
                .then(response => {
                    if (response.status === 200) {
                        setMarked(false)
                        toast.success("Restaurant removed from favourites");
                    }
                }
                )
                .catch(error => console.error('Error:', error))
        }
    }

    return (
        <SpecificWrapper>
            <Header />
            <SpecificCardStyle>
                {isLoading ? <SpecificPage /> :
                    <>
                        <HeaderDiv>
                            <HeaderLeft>
                                <SpecificHeading>{specifcRestInfo?.name}</SpecificHeading>
                                <SpecificCardSubHeading>{specifcRestInfo?.sla?.slaString}</SpecificCardSubHeading>
                            </HeaderLeft>

                            <HeaderRight>
                                <SpecificCardSubHeading>
                                    {userData !== null ? <>
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            className="fa-regular fa-heart"
                                            style={{ marginRight: "1vw", color: marked ? theme.colors.accent : "white", cursor: "pointer" }}
                                            onClick={(e) => handleMarkedFav(specifcRestInfo, e)}
                                        />
                                        | <i class="fa-solid fa-star" style={{ color: "#3d9b6d", marginLeft: "1vw" }}></i><span style={{ color: "#3d9b6d" }}>{specifcRestInfo?.avgRating}</span>
                                    </> : <>
                                        <i class="fa-solid fa-star" style={{ color: "#3d9b6d", marginLeft: "1vw" }}></i><span style={{ color: "#3d9b6d" }}>{specifcRestInfo?.avgRating}</span>
                                    </>}
                                </SpecificCardSubHeading>
                                <SpecificCardSubHeading> {available}</SpecificCardSubHeading>
                            </HeaderRight>
                        </HeaderDiv>
                        <hr></hr>
                        <MenuHeading>MENU</MenuHeading>
                    </>
                }

                <AllMenuCards>
                    {isLoading ? data.cards?.map(item => {
                        // RETURNING SHIMMER UI
                        return <SpecificRest />
                    }) : specifcRestInfo.menu?.map((item) => {
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

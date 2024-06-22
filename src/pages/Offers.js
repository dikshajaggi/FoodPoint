import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from "../components/RestCard"
import Header from "../components/Header"
import data from "../assets/data.json"
import { OfferBanner, OfferWrapper } from "./styledComponents/Offers"
import Footer from "../components/Footer"
import { CardWrapper } from "../layouts/styledComponents/Main"
import RestCard from "../shimmerUI/RestCard"
import { Context } from '../utilities/context/Context'
import langConfig from "../config/langConfig.json"

const Offers = () => {
    const context = useContext(Context)
    const [offers, setOffers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
            // getData()
            setOffers(context?.filteredData)
        }, 1000)

    }, [context?.filteredData])

    // async function getData() {
    //     await axios.get("https://www.swiggy.com/api/seo/getListing?lat=28.65420&lng=77.23730").then(item => {
    //         console.log(item.data.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants, "checking item")
    //         setOffers(item.data.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    //     })

    //     await axios.get("https://www.swiggy.com/dapi/offers/payment?lat=28.7040592&lng=77.10249019999999&offset=0").then(item => {
    //         console.log(item.data.data.cards, "payment")
    //         setPaymentOffers(item.data.data.cards)
    //     })
    // }
    return (
        <>
            <Header />
            <OfferWrapper>
                <OfferBanner>{context.language === "en" ? langConfig[0].offers.heading.en : langConfig[0].offers.heading.hn}</OfferBanner>
                <CardWrapper>
                    {isLoading ? data?.restaurants?.map(item => {
                        return <RestCard />
                    }) : offers?.map((item) => {
                        return item.aggregatedDiscountInfoV3 === undefined ? null : <Link to={`/rest/${item._id}`} style={{ textDecoration: 'none' }} >< Card {...item} /></Link>
                    })}
                </CardWrapper>
            </OfferWrapper>
            <Footer />
        </>
    )
}

export default Offers

import axios from "axios"
import classnames from 'classnames'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import OfferCard from "../components/OfferCard"
import Card from "../components/RestCard"
import Header from "../components/Header"
import RestCard from "../shimmerUI/RestCard"
import { data } from "../assets/data"
import {OfferBanner, OfferCardWrapper, OfferWrapper } from "./styledComponents/Offers"
import Footer from "../components/Footer"
import { CardWrapper } from "../layouts/styledComponents/Main"

const Offers = () => {

    const [offers, setOffers] = useState([])
    const [paymentOffers, setPaymentOffers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentActiveTab, setCurrentActiveTab] = useState('1')

    const toggle = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab)
    }
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
            getData()
        }, 1000)

    }, [])

    async function getData() {
        await axios.get("https://www.swiggy.com/api/seo/getListing?lat=28.65420&lng=77.23730").then(item => {
            console.log(item.data.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants, "checking item")
            setOffers(item.data.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        })

        await axios.get("https://www.swiggy.com/dapi/offers/payment?lat=28.7040592&lng=77.10249019999999&offset=0").then(item => {
            console.log(item.data.data.cards, "payment")
            setPaymentOffers(item.data.data.cards)
        })
    }
    return (
        <>
            <Header />
            <OfferWrapper>
                <OfferBanner> Explore top deals and offers exclusively for you! </OfferBanner>
                <CardWrapper>
                            {isLoading ? data?.map((item) => {
                            return <RestCard />
                            }) : offers?.slice(1)?.map((item) => {
                            return <Link to={`/rest/${item.info.feeDetails?.restaurantId}`} style={{ textDecoration: 'none' }} >< Card {...item.info} /></Link>
                            })}
                        </CardWrapper>
            </OfferWrapper>
            <Footer />
        </>
    )
}

export default Offers

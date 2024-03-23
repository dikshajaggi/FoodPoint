import React, { useContext, useEffect, useState } from 'react'
import Card from '../components/RestCard'
import "../style.css"
import { Link } from 'react-router-dom'
import Header from "../components/Header"
import { Context } from '../utilities/context/Context'
import { Banner, CardWrapper, MainWrapper, Text } from './styledComponents/Main'
import { useTheme } from 'styled-components'
import data from "../assets/data.json"
import Footer from '../components/Footer'
import RestCard from "../shimmerUI/RestCard"


const Main = () => {
    const context = useContext(Context)
    const theme = useTheme()
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        console.log(data?.restaurants, "data?.cards?.card.card.gridElements.infoWithStyle.restaurants")
        context.setrestData(data?.restaurants)
        context.setFilteredData(data?.restaurants)
        setIsLoading(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context.filter])

    return (
        <MainWrapper theme={theme}>
            <Header />
            <Banner>
                <Text>Welcome to HungerBites: Your Ultimate Culinary Destination!</Text>
            </Banner>
            <CardWrapper>
                {isLoading ? data?.restaurants.map((item) => {
                    return <RestCard />
                }) : context?.filteredData?.map((item) => {
                    return <Link style={{ textDecoration: 'none' }} to={`/rest/${item.id}`}> <Card {...item} /> </Link>
                    // return < Card {...item?.info} />
                })}
            </CardWrapper>
            <Footer />
        </MainWrapper>
    )
}

export default Main

import React, { useContext, useEffect } from 'react'
import Card from '../components/RestCard'
import "../style.css"
import { Link } from 'react-router-dom'
import Header from "../components/Header"
import { Context } from '../utilities/context/Context'
import { CardWrapper, MainWrapper } from './styledComponents/Main'
import { useTheme } from 'styled-components'
import data from "../assets/data.json"
import Footer from '../components/Footer'

const Main = () => {
    const props = useContext(Context)
    const theme = useTheme()
    // const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        console.log(data?.cards?.card.card.gridElements.infoWithStyle.restaurants, "data?.cards?.card.card.gridElements.infoWithStyle.restaurants")
        props.setrestData(data?.cards?.card.card.gridElements.infoWithStyle.restaurants)
        props.setFilteredData(data?.cards?.card.card.gridElements.infoWithStyle.restaurants)
    }, [props.filter])

    return (
        <MainWrapper theme={theme}>
            <Header />
            <CardWrapper>
                {/* {isLoading ? data.map((item) => {
                    return <RestCard />
                }) :  */}
                {props?.filteredData?.map((item) => {
                    return <Link style={{ textDecoration: 'none' }} to={`/rest/:${item.info.id}`}> <Card {...item?.info} /> </Link>
                    // return < Card {...item?.info} />
                })}
            </CardWrapper>
            <Footer />
        </MainWrapper>
    )
}

export default Main

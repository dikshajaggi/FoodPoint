import React from 'react'
import "../style.css"
import { CardWrapper, InfoWrapper, RestInfo, RestName } from './styledComponents/PizzaCard'

const Card = (props) => {
    const { name, costForTwoString, cuisines, sla, cloudinaryImageId, avgRating, aggregatedDiscountInfo } = props
    return (
        <CardWrapper>
            <img className="pizzaImg" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="" />
            <RestName>{name}</RestName>
            {/* <h4 className='text-light'>{cuisines[0]}</h4> */}
            <InfoWrapper>
                <RestInfo>{`${sla?.deliveryTime} MINS`}</RestInfo>
                <RestInfo>|</RestInfo>
                <RestInfo><i class="fa-regular fa-star"></i>{avgRating}</RestInfo>
                <RestInfo>|</RestInfo>
                <RestInfo>{costForTwoString}</RestInfo>
            </InfoWrapper>
            <RestInfo className="text-center" style={{ marginTop: "2vh" }}>{aggregatedDiscountInfo ? aggregatedDiscountInfo?.header : "Currently no offers available"}</RestInfo>
        </CardWrapper>
    )
}

export default Card

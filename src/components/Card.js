import React from 'react'
import "../style.css"

const Card = (props) => {
    const { name, costForTwoString, cuisines, deliveryTime, cloudinaryImageId, avgRating, aggregatedDiscountInfo } = props
    return (
        <div className='card'>
            <img className="pizzaImg" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
            <h2 style={{ textAlign: "center", marginTop: "2vh" }}>{name}</h2>
            <h4 className='text-light'>{cuisines?.join(" , ")}</h4>
            <div className="info-row border-bottom">
                <h4>{`${deliveryTime} MINS`}</h4>
                <h4>|</h4>
                <h4><i class="fa-regular fa-star"></i>{avgRating}</h4>
                <h4>|</h4>
                <h4>{costForTwoString}</h4>
            </div>
            <h3 className="text-center" style={{ marginTop: "2vh" }}>{aggregatedDiscountInfo ? aggregatedDiscountInfo?.header : "Currently no offers available"}</h3>
        </div>
    )
}

export default Card

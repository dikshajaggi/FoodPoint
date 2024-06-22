import React from 'react'
import "../style.css"
import { CardWrapper, Image, InfoWrapper, RestInfo, RestName } from './styledComponents/RestCard'
import { useTheme } from 'styled-components'

const Card = (props) => {
    const themes = useTheme()
    const { name, costForTwo, sla, avgRating, aggregatedDiscountInfoV3, image } = props
    console.log(aggregatedDiscountInfoV3, "aggregatedDiscountInfoV3")

    const changePageTitle = (title) => {
         document.title = title
     }

    return (
        <CardWrapper onClick={() => changePageTitle(`FoodPoint | ${name}`)} >
            <Image image={image}>
                {/* <Image src={require(`../assets/rest_imgs/${image}`)} alt={image} /> */}
            </Image>
            <RestName>{name}</RestName>
            {/* <h4 className='text-light'>{cuisines[0]}</h4> */}
            <InfoWrapper>
                <RestInfo>{`${sla?.deliveryTime} MINS`}</RestInfo>
                <RestInfo>|</RestInfo>
                <RestInfo><i class="fa-regular fa-star" style={{ paddingRight: "4px" }}></i>{avgRating}</RestInfo>
                <RestInfo>|</RestInfo>
                <RestInfo>{costForTwo}</RestInfo>
            </InfoWrapper>
            <RestInfo style={{ marginTop: "2vh", color: aggregatedDiscountInfoV3 ? themes.colors.accent : '#D0D0D0' }}>{aggregatedDiscountInfoV3 ? `${aggregatedDiscountInfoV3?.discountTag === undefined ? "" : aggregatedDiscountInfoV3?.discountTag} ${aggregatedDiscountInfoV3?.header === undefined ? "" : aggregatedDiscountInfoV3?.header} ${aggregatedDiscountInfoV3?.subHeader === undefined ? "" : `(${aggregatedDiscountInfoV3?.subHeader})`} ` : "Currently no offers available"}</RestInfo>
        </CardWrapper>
    )
}

export default Card

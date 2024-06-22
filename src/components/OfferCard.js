import React, { useState } from 'react'
import { CopyCouponCode, OfferCardWrapper } from './styledComponents/OfferCard'

const OfferCard = (props) => {
    const { couponCode, description, title } = props
    const [btnText, setBtnText] = useState("COPY")

    const copyCode = (couponCode) => {
        setBtnText("COPIED")
        navigator.clipboard.writeText(couponCode)
    }
    return (
        <OfferCardWrapper>
            <h4>{couponCode}</h4>
            <h4>{title}</h4>
            <h6>{description}</h6>
            <CopyCouponCode onClick={() => copyCode(couponCode)}>{btnText}</CopyCouponCode>

            {/* <h4>1234DS</h4>
            <h4>title</h4>
            <h6>desc desc desc desc desc desc desc desc desc</h6>
            <button onClick={() => copyCode(couponCode)}>{btnText}</button> */}
        </OfferCardWrapper>
    )
}

export default OfferCard

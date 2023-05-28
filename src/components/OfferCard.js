import React, { useState } from 'react'

const OfferCard = (props) => {
    const { couponCode, description, title } = props
    const [btnText, setBtnText] = useState("COPY")

    const copyCode = (couponCode) => {
        setBtnText("COPIED")
        navigator.clipboard.writeText(couponCode)
    }
    return (
        <div className='offerCard'>
            <h4>{couponCode}</h4>
            <h4>{title}</h4>
            <h6>{description}</h6>
            <button className="copy-coupon-code" onClick={() => copyCode(couponCode)}>{btnText}</button>

            {/* <h4>1234DS</h4>
            <h4>title</h4>
            <h6>desc desc desc desc desc desc desc desc desc</h6>
            <button onClick={() => copyCode(couponCode)}>{btnText}</button> */}
        </div>
    )
}

export default OfferCard

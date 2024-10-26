import React, { useState, useContext } from 'react'
import { Add, ButtonPay, ChangeAddBtn, Div1, Div2, FinalPaymentWrapper } from './styledComponents/FinalPayment'
import { Context } from '../utilities/context/Context'
import axios from 'axios'

const FinalPayment = ({cartData, checkoutHandler}) => {
  const context = useContext(Context)

  const [loc, setLoc] = useState(localStorage.getItem("location"))

  const handleLocation = () => {
    const ReverseGeoCoding = (obj) => {
        let response = axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${obj.latitude}&lon=${obj.longitude}&format=json`)
        response.then(result => {
            localStorage.setItem('location', result.data.display_name);
            setLoc(result.data.display_name)
            context.setLocation(result.data.display_name)
            // setTimeout(() => {
            //     setChangePage(true)
            // }, 1000);
        })
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            ReverseGeoCoding(position.coords)
        },
        (error) => {
            console.error("Error getting user location:", error);
        }
    )
}
  return (
    <FinalPaymentWrapper>
      <Div1>
        <Add>
          <h5>Delivery Address</h5>
          <ChangeAddBtn onClick={handleLocation}>Change</ChangeAddBtn>
        </Add>
        <h6 style={{margin: "20px 0px"}}>{loc}</h6>
        <h6>16 mins</h6>
      </Div1>
      <Div2>
        <h5 style={{marginBottom: "20px"}}>Choose Payment Method</h5>
        <ButtonPay onClick={checkoutHandler}>Proceed to Pay</ButtonPay>
      </Div2>
    </FinalPaymentWrapper>
  )
}

export default FinalPayment

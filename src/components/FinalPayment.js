import React from 'react'
import { Add, ButtonPay, ChangeAddBtn, Div1, Div2, FinalPaymentWrapper } from './styledComponents/FinalPayment'

const FinalPayment = ({cartData, checkoutHandler}) => {
  return (
    <FinalPaymentWrapper>
      <Div1>
        <Add>
          <h5>Delivery Address</h5>
          <ChangeAddBtn>Change</ChangeAddBtn>
        </Add>
        <h6 style={{margin: "20px 0px"}}>{localStorage.getItem("location")}</h6>
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

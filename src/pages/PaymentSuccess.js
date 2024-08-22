import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { SuccessPaymentWrapper } from './styledComponents/Payment'

const PaymentSuccess = () => {
    const searchQuery = useSearchParams()[0]
    const refNum = searchQuery.get("reference")
  return (
    <SuccessPaymentWrapper>
      <h3>Order Successful</h3>
      <h6>Reference No. {refNum}</h6>
    </SuccessPaymentWrapper>
  )
}

export default PaymentSuccess

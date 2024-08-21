import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PaymentSuccess = () => {
    const searchQuery = useSearchParams()[0]
    const refNum = searchQuery.get("reference")
  return (
    <div>
      <h3>Order Successful</h3>
      <h6>Reference No. {refNum}</h6>
    </div>
  )
}

export default PaymentSuccess

import React, { useEffect, useState } from 'react'
// import { useSearchParams } from 'react-router-dom'
import { SuccessPaymentWrapper } from './styledComponents/Payment'
import successful from "../assets/images/successful.png"
import { useNavigate } from 'react-router-dom'

const PaymentSuccess = () => {
    // const searchQuery = useSearchParams()[0]
    // const refNum = searchQuery.get("reference")
    const [timer, setTimer] = useState(5)
    const navigate = useNavigate()

    useEffect(() => {
      const countdown =  setInterval(() => {
        setTimer(prev => prev - 1)
      }, [1000])

      if (timer === 0) {
        clearInterval(countdown)
        navigate("/main")
      }

      return () => clearInterval(countdown)
    }, [timer, navigate])


  return (
    <SuccessPaymentWrapper>
      <img src= {successful} alt="/success" style={{height: "100px", width:"100px", marginBottom: "20px"}}/>
      <h3 style={{fontSize: "38px"}}>Yay! Order Received</h3>
      <h3 style={{marginTop: "20px", cursor: "pointer"}}>Track your order</h3>
      <h3>You will be redirected to Home page in {timer}...</h3>
    </SuccessPaymentWrapper>
  )
}

export default PaymentSuccess

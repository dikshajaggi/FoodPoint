import React, { useContext, useState } from 'react'
import { Button, ButtonClose, CardMethod, CashOnDelivery, CodHead, Input, InputRow, OrderDetails, PaymentInfo, PaymentOp, PaymentWrapper, RowInput, SubmitDetails, Wrapper } from './styledComponents/Payment'
import GooglePayButton from '@google-pay/button-react';
import { LabelInputWrapper } from './styledComponents/LoginSignup';
import { useFormik } from 'formik';
import Header from '../components/Header';
import { Context } from '../utilities/context/Context';

const Payment = () => {
    const context = useContext(Context)
    const [close, setClose] = useState(true)
    const [closeCard, setCloseCard] = useState(true)
    const initialValues = {
        name: "",
        address: "",
        address2: "",
        contact: "",
        city: "",
        region: ""
    }

    const formik = useFormik({
        initialValues: initialValues,
        // validationSchema: SignUpSchema,
        onSubmit: (values, action) => {
            console.log(values)
            action.resetForm()
        }
    })

    const handleSubmitDetails = () => {
        setClose(true)
        console.log("saved")
    }

    return (
        <PaymentWrapper>
            <Header />
            <OrderDetails>
                <PaymentOp>Payment Options</PaymentOp>
                <PaymentInfo>{context.totalItems} items | Total ₹{context.totalPrice}</PaymentInfo>
            </OrderDetails>
            <Wrapper>
                <Button onClick={() => setClose(false)}><CodHead><img src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_64,e_trim/PaymentLogos/instruments/4x/Cash" alt= "" style={{marginRight: "10px", height: "2vh"}}/> Pay on Delivery</CodHead></Button>
                <Button onClick={() => setCloseCard(false)}><CodHead> <i class="fa-regular fa-credit-card" style={{color: "#2D2D3D", marginRight: "10px"}}></i> Credit / Debit card</CodHead></Button>
                <CashOnDelivery close={close}>
                    <ButtonClose onClick={() => setClose(true)}><i class="fa-solid fa-xmark" style={{fontSize: "18px"}}></i></ButtonClose>
                    <CodHead>Payment Authorization Form</CodHead>
                    <form onSubmit={formik.handleSubmit}>
                        <LabelInputWrapper>
                            <Input type="text" placeholder="Name" name="name" id="name" onChange={formik.handleChange} onBlur={formik.handleBlur}></Input>
                        </LabelInputWrapper>
                        <LabelInputWrapper>
                            <Input type="text" placeholder="Street address" name="address" id="address" onChange={formik.handleChange} onBlur={formik.handleBlur}></Input>
                        </LabelInputWrapper>
                        <LabelInputWrapper>
                            <Input type="text" placeholder="Street address line 2" name="address2" id="address2" onChange={formik.handleChange} onBlur={formik.handleBlur}></Input>
                        </LabelInputWrapper>
                        <LabelInputWrapper>
                            <RowInput>
                                <InputRow type="text" placeholder="City" name="city" id="city" onChange={formik.handleChange} onBlur={formik.handleBlur}></InputRow>
                                <InputRow type="text" placeholder="Region" name="region" id="region" onChange={formik.handleChange} onBlur={formik.handleBlur}></InputRow>
                            </RowInput>
                        </LabelInputWrapper>
                        <LabelInputWrapper>
                            <RowInput>
                                <InputRow type="number" placeholder="Pincode" name="pincode" id="pincode" onChange={formik.handleChange} onBlur={formik.handleBlur}></InputRow>
                                <InputRow type="text" placeholder="State" name="state" id="state" onChange={formik.handleChange} onBlur={formik.handleBlur}></InputRow>
                            </RowInput>
                        </LabelInputWrapper>
                        <LabelInputWrapper>
                            <Input type="number" placeholder="Contact number" name="contact" id="contact" onChange={formik.handleChange} onBlur={formik.handleBlur}></Input>
                        </LabelInputWrapper>
                    </form>
                    <SubmitDetails onClick={handleSubmitDetails}> Place Order </SubmitDetails>
                </CashOnDelivery>
                <CardMethod closeCard={closeCard}>
                    <ButtonClose onClick={() => setCloseCard(true)}><i class="fa-solid fa-xmark" style={{fontSize: "18px"}}></i></ButtonClose>
                    <GooglePayButton
                        environment="TEST"
                        paymentRequest={{
                            apiVersion: 2,
                            apiVersionMinor: 0,
                            allowedPaymentMethods: [
                                {
                                    type: 'CARD',
                                    parameters: {
                                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                    },
                                    tokenizationSpecification: {
                                        type: 'PAYMENT_GATEWAY',
                                        parameters: {
                                            gateway: 'example',
                                            gatewayMerchantId: 'exampleGatewayMerchantId',
                                        },
                                    },
                                },
                            ],
                            merchantInfo: {
                                merchantId: '12345678901234567890',
                                merchantName: 'Demo Merchant',
                            },
                            transactionInfo: {
                                totalPriceStatus: 'FINAL',
                                totalPriceLabel: 'Total',
                                totalPrice: '100.00',
                                currencyCode: 'USD',
                                countryCode: 'US',
                            },
                        }}
                        onLoadPaymentData={paymentRequest => {
                            console.log('load payment data', paymentRequest);
                        }}
                    />
                </CardMethod>
            </Wrapper>
        </PaymentWrapper>
    )
}

export default Payment

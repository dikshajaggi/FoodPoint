import React, { useContext, useEffect, useState } from 'react'
import { Button, ButtonClose, CardMethod, CashOnDelivery, CodHead, Input, InputRow, OrderDetails, PaymentInfo, PaymentOp, PaymentWrapper, RowInput, SubmitDetails, Wrapper } from './styledComponents/Payment'
import { ErrorPara, LabelInputWrapper } from './styledComponents/LoginSignup';
import { useFormik } from 'formik';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import { Context } from '../utilities/context/Context';
import { paymentFormSchema } from '../schemas/payment';
import { useNavigate } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../components/PaymentForm';
import { loadStripe } from '@stripe/stripe-js';

const Payment = () => {
    const context = useContext(Context)
    const [close, setClose] = useState(true)
    const [closeCard, setCloseCard] = useState(true)
    const navigate = useNavigate()
    const stripePromise = loadStripe('pk_test_51L8RIISDs4GP9CM0Z4xPcERBYUJ4wCZrNFYfIBdU3jD7Cx8SQOowcBW9YBPVBMjBwzaMtIdNGlTKwyQ22IpdnL4A00JRaV3WXO')

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
        validationSchema: paymentFormSchema,
        onSubmit: (values, action) => {
            console.log(values)
            action.resetForm()
        }
    })

    const handleSubmitDetails = () => {
        setClose(true)
        console.log("28 saved")
        context.setOrderPlaced(true)
    }

    const [total, setTotal] = useState()
    const [totalItems, setTotalItems] = useState()
    const cartItems = useSelector(state => state.cart.items)

    useEffect(() => {
        if (cartItems?.length === 0) {
            navigate("/")
        }
    }, [])

    useEffect(() => {
        const totalItems = cartItems.reduce((acc, current) => acc + current.quantity, 0);
        const totalPrice = cartItems.reduce((acc, current) => {
            if (current.item && current.item.defaultPrice) {
                return acc + current.item.defaultPrice * current.quantity;
            } else if (current.item && current.item.price) {
                return acc + current.item.price * current.quantity;
            }
            return acc;
        }, 0);
        setTotalItems(totalItems);
        setTotal(totalPrice);
    }, [cartItems])

    return (
        <PaymentWrapper>
            <Header />
            <OrderDetails>
                <PaymentOp>Payment Options</PaymentOp>
                <PaymentInfo>{totalItems === 1 ? `${totalItems} item` : `${totalItems} items`} | Total ₹{total / 100}</PaymentInfo>
            </OrderDetails>
            <Wrapper>
                <Button onClick={() => setClose(false)}><CodHead><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_64,e_trim/PaymentLogos/instruments/4x/Cash" alt="" style={{ marginRight: "10px", height: "2vh" }} /> Pay on Delivery</CodHead></Button>
                <Button onClick={() => setCloseCard(false)}><CodHead> <i class="fa-regular fa-credit-card" style={{ color: "#2D2D3D", marginRight: "10px" }}></i> Credit / Debit card</CodHead></Button>
                <CashOnDelivery close={close}>
                    <ButtonClose onClick={() => setClose(true)}><i class="fa-solid fa-xmark" style={{ fontSize: "18px" }}></i></ButtonClose>
                    <CodHead>Payment Authorization Form</CodHead>
                    <form onSubmit={formik.handleSubmit}>
                        <LabelInputWrapper>
                            <Input type="text" placeholder="Name" name="name" id="name" onChange={formik.handleChange} onBlur={formik.handleBlur}></Input>
                            {formik.errors.name && formik.touched.name ? <ErrorPara>{formik.errors.name}</ErrorPara> : null}
                        </LabelInputWrapper>
                        <LabelInputWrapper>
                            <Input type="text" placeholder="Street address" name="address" id="address" onChange={formik.handleChange} onBlur={formik.handleBlur}></Input>
                            {formik.errors.address && formik.touched.address ? <ErrorPara>{formik.errors.address}</ErrorPara> : null}
                        </LabelInputWrapper>
                        <LabelInputWrapper>
                            <Input type="text" placeholder="Street address line 2" name="address2" id="address2" onChange={formik.handleChange} onBlur={formik.handleBlur}></Input>
                            {formik.errors.address2 && formik.touched.address2 ? <ErrorPara>{formik.errors.address2}</ErrorPara> : null}
                        </LabelInputWrapper>
                        <LabelInputWrapper>
                            <RowInput>
                                <InputRow type="text" placeholder="City" name="city" id="city" onChange={formik.handleChange} onBlur={formik.handleBlur}></InputRow>
                                {formik.errors.city && formik.touched.city ? <ErrorPara>{formik.errors.city}</ErrorPara> : null}
                                <InputRow type="text" placeholder="Region" name="region" id="region" onChange={formik.handleChange} onBlur={formik.handleBlur}></InputRow>
                                {formik.errors.region && formik.touched.region ? <ErrorPara>{formik.errors.region}</ErrorPara> : null}
                            </RowInput>
                        </LabelInputWrapper>
                        <LabelInputWrapper>
                            <RowInput>
                                <InputRow type="number" placeholder="Pincode" name="pincode" id="pincode" onChange={formik.handleChange} onBlur={formik.handleBlur}></InputRow>
                                {formik.errors.pincode && formik.touched.pincode ? <ErrorPara>{formik.errors.pincode}</ErrorPara> : null}
                                <InputRow type="text" placeholder="State" name="state" id="state" onChange={formik.handleChange} onBlur={formik.handleBlur}></InputRow>
                                {formik.errors.state && formik.touched.state ? <ErrorPara>{formik.errors.state}</ErrorPara> : null}
                            </RowInput>
                        </LabelInputWrapper>
                        <LabelInputWrapper>
                            <Input type="number" placeholder="Contact number" name="contact" id="contact" onChange={formik.handleChange} onBlur={formik.handleBlur}></Input>
                            {formik.errors.contact && formik.touched.contact ? <ErrorPara>{formik.errors.contact}</ErrorPara> : null}
                        </LabelInputWrapper>
                    </form>
                    <SubmitDetails onClick={handleSubmitDetails}> Place Order </SubmitDetails>
                </CashOnDelivery>
                <CardMethod closeCard={closeCard}>
                    <Elements stripe={stripePromise}>
                        <PaymentForm />
                    </Elements>

                    {/* <GooglePayButton
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
                    /> */}
                </CardMethod>
            </Wrapper>
        </PaymentWrapper>
    )
}

export default Payment

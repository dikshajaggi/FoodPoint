import React, { useContext, useEffect, useState } from 'react'
import { Button, ButtonClose, CashOnDelivery, CodHead, Input, InputRow, OrderDetails, PaymentInfo, PaymentOp, PaymentWrapper, RowInput, SubmitDetails, Wrapper } from './styledComponents/Payment'
import { ErrorPara, LabelInputWrapper } from './styledComponents/LoginSignup';
import { useFormik } from 'formik';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import { Context } from '../utilities/context/Context';
import { paymentFormSchema } from '../schemas/payment';
import { useNavigate } from 'react-router-dom';
import langConfig from "../config/langConfig.json"
import api from '../utilities/api';
import { UserContext } from '../utilities/context/UserContext';

const Payment = () => {
    const context = useContext(Context)
    const [close, setClose] = useState(true)
    const [total, setTotal] = useState()
    const [totalItems, setTotalItems] = useState()
    const cartItems = useSelector(state => state.cart.items)
    const [cart, setCart] = useState(cartItems)
    const navigate = useNavigate()
    const { userId } = useContext(UserContext)

    const initialValues = {
        name: "",
        address: "",
        address2: "",
        contact: "",
        city: "",
        region: ""
    }

    const handleSubmitDetails = (values) => {
        orderPlaced(values)
        setClose(true)
        console.log("28 saved", values, cartItems)
        context.setOrderPlaced(true)
        navigate("/main")
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: paymentFormSchema,
        onSubmit: (values, action) => {
            console.log(values, "payment form submitted")
            handleSubmitDetails(values)
        }
    })

    const getCartItems = async() => {
        const res = await api.getCartItems(userId)
        if (res.success) setCart(res.items)
    }

    const orderPlaced = async(values) => {
        const orderData = {cart: cart._id, ...values}
        const data = {
            user: userId,
            items: orderData,
        }
        const res = await api.orderPlaced(data)
        console.log(res, "order placed")
        if (res.data.success) api.deleteAllCartItems(userId)
    }

    useEffect(() => {
        if (cartItems?.length === 0) {
            navigate("/")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    useEffect(() => {
        getCartItems()
    }, [cartItems])

    return (
        <PaymentWrapper>
            <Header />
            <OrderDetails>
                <PaymentOp>{context.language === "en" ? langConfig[0].checkout.pay_option.en : langConfig[0].checkout.pay_option.hn}</PaymentOp>
                <PaymentInfo>{totalItems === 1 ? `${totalItems} ${context.language === "en" ? langConfig[0].checkout.item.en : langConfig[0].checkout.item.hn}` : ` ${totalItems} ${context.language === "en" ? langConfig[0].checkout.items.en : langConfig[0].checkout.items.hn}`} | {context.language === "en" ? langConfig[0].checkout.total.en : langConfig[0].checkout.total.hn} ₹{total / 100}</PaymentInfo>
            </OrderDetails>
            <Wrapper>
                <Button onClick={() => setClose(false)}><CodHead><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_64,e_trim/PaymentLogos/instruments/4x/Cash" alt="" style={{ marginRight: "10px", height: "2vh" }} />{context.language === "en" ? langConfig[0].checkout.cod.en : langConfig[0].checkout.cod.hn}</CodHead></Button>
                {/* <Button onClick={() => setCloseCard(false)}><CodHead> <i class="fa-regular fa-credit-card" style={{ color: "#2D2D3D", marginRight: "10px" }}></i> Credit / Debit card</CodHead></Button> */}
                <CashOnDelivery close={close}>
                    <ButtonClose onClick={() => setClose(true)}><i class="fa-solid fa-xmark" style={{ fontSize: "18px" }}></i></ButtonClose>
                    <CodHead>{context.language === "en" ? langConfig[0].paymentForm.heading.en : langConfig[0].paymentForm.heading.hn}</CodHead>
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
                        <SubmitDetails type='submit'> {context.language === "en" ? langConfig[0].paymentForm.place_order.en : langConfig[0].paymentForm.place_order.hn} </SubmitDetails>

                    </form>
                </CashOnDelivery>
            </Wrapper>
        </PaymentWrapper>
    )
}

export default Payment

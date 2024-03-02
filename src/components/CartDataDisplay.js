import {useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "../style.css"
import { removeItem } from '../utilities/redux/cartSlice'
import { CardCart, CardText, CartRemoveBtn, DishImgCart, DishName, QtyRemoveWrapper } from "./styledComponents/CartDataDisplay"
import QuantityIncDec from "../utilities/helperComponents/QuantityIncDec"


const CartDataDisplay = (props) => {
    console.log(props, "line10")
    const { item : {name, price, imageId, id}} = props

    

    const dispatch = useDispatch()
    const items = useSelector(store => store.cart.items)
    const handleRemoveItem = (data) => {
        dispatch(removeItem(data))
    }

    console.log(items, "line22")


    return (
        <>
            <CardCart>
                <DishImgCart src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + imageId} alt="/" />
                <CardText>
                    <DishName>{name}</DishName>
                    <h2 style={{ fontSize: "18px" }}>Rs. {(price) / 100}</h2>
                    <QtyRemoveWrapper>
                        <QuantityIncDec id={id} qty={props.quantity} name={name} price={price / 100} />
                        <CartRemoveBtn onClick={() => handleRemoveItem(props.item)}><i class="fa-solid fa-trash"></i></CartRemoveBtn>
                    </QtyRemoveWrapper>
                </CardText>
            </CardCart>
        </>
    )
}
export default CartDataDisplay
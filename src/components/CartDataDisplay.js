import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "../style.css"
import { Context } from "../utilities/context/Context"
import { removeItem } from '../utilities/redux/cartSlice'
import { CardCart, CardText, CartRemoveBtn, DishImgCart, DishName } from "./styledComponents/CartDataDisplay"


const CartDataDisplay = (props) => {
    const { name, price, imageId, id } = props

    const dispatch = useDispatch()
    const context = useContext(Context)
    const items = useSelector(store => store.cart.items)
    const [qty, setQty] = useState(null)

    const handleRemoveItem = (id) => {
        context.quantity.map(item => {
                if (item.id === id) item.qty = 0
            })
        dispatch(removeItem(items.filter((item) => item.id !== id)))
    }

    useEffect(() => {
        context.quantity.filter((item) => {
            if (item.id === id) {
                setQty(item.qty)
            }
        })
    }, [])


    return (
        <>
            <CardCart>
                <DishImgCart src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + imageId} alt="/" />
                <CardText>
                    <DishName>{name}</DishName>
                    <h2 style={{ fontSize: "18px" }}>Rs. {(price) / 100}</h2>
                    <h2 style={{ fontSize: "18px" }}>Qty: {qty}</h2>
                    <CartRemoveBtn onClick={() => handleRemoveItem(id)}>Remove</CartRemoveBtn>
                </CardText>
            </CardCart>
        </>
    )
}
export default CartDataDisplay
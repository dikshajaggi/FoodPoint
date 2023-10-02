import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import "../style.css"
import { Context } from "../utilities/context/Context"
import { removeItem } from '../utilities/redux/cartSlice'
import { CardCart, CardText, CartRemoveBtn, PizzaImgCart } from "./styledComponents/CartDataDisplay"

const CartDataDisplay = (props) => {
    const { name, price, imageId, id } = props

    const dispatch = useDispatch()
    const context = useContext(Context)
    const items = useSelector(store => store.cart.items)

    const handleRemoveItem = (id) => {
        dispatch(removeItem(items.filter((item) => item.id !== id)))
    }

    console.log(context.quantity, "context quantity cart")

    return (
        <>
            <CardCart>
                <PizzaImgCart src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + imageId} alt="/" />
                <CardText>
                    <h2>{name}</h2>
                    <h2>Rs. {(price) / 100}</h2>
                    <h2>Qty: {context.quantity.filter((item) => id === item).length}</h2>
                    <CartRemoveBtn onClick={() => handleRemoveItem(id)}>Remove</CartRemoveBtn>
                </CardText>
            </CardCart>
        </>
    )
}
export default CartDataDisplay
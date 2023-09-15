import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import "../style.css"
import { Context } from "../utilities/context/Context"
import { removeItem } from '../utilities/redux/cartSlice'

const CartDataDisplay = (props) => {
    const { name, price, imageId, id } = props

    const dispatch = useDispatch()
    const context = useContext(Context)
    const items = useSelector(store => store.cart.items)

    const handleRemoveItem = (id) => {
        dispatch(removeItem(items.filter((item) => item.id !== id)))
    }

    return (
        <>
            <div className='card-cart'>
                <img className="pizzaImg-cart" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + imageId} />
                <div className="text-cart">
                    <h2>{name}</h2>
                    <h2>Rs. {(price) / 100}</h2>
                    <h2>Qty: {context.quantity.filter((item) => id === item.id).length}</h2>
                    <button className="cart-remove-btn" onClick={() => handleRemoveItem(id)}>Remove</button>
                </div>
            </div>
        </>
    )
}
export default CartDataDisplay
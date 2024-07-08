import { useDispatch, useSelector } from "react-redux"
import "../style.css"
import { removeItem } from '../utilities/redux/cartSlice'
import { CardCart, CardText, CartRemoveBtn, DishImgCart, DishName, QtyRemoveWrapper } from "./styledComponents/CartDataDisplay"
import QuantityIncDec from "../utilities/helperComponents/QuantityIncDec"
import langConfig from "../config/langConfig.json"
import { useContext } from "react"
import { Context } from "../utilities/context/Context"
import api from "../utilities/api"
import { UserContext } from "../utilities/context/UserContext"
import { toast } from "react-toastify"

const CartDataDisplay = (props) => {
    const { name, price, imageId, id, defaultPrice } = props?.menu
    const dispatch = useDispatch()
    const context = useContext(Context)
    const { userId } = useContext(UserContext)
    const cartItems = useSelector(state => state.cart.items)


    const removeItemFromCart = async (restData) => {
        console.log(restData, "restdataaaaa", cartItems)
        dispatch(removeItem(restData.menu.id))
        const itemsRemoved = cartItems.filter(item => item.menu.id !== restData.menu.id)
        localStorage.setItem('cartItems', JSON.stringify(itemsRemoved))
        const res = await api.deleteSpecificCartItem(userId, restData.menu.id)
        if (res.status === 200) toast.success("Item removed from cart")
    }

    return (
        <>
            <CardCart>
                <DishImgCart src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + imageId} alt="/" />
                <CardText>
                    <DishName>{name}</DishName>
                    {defaultPrice ? <h2 style={{ fontSize: "18px" }}>Rs. {(defaultPrice) / 100}</h2> : <h2 style={{ fontSize: "18px" }}>Rs. {(price) / 100}</h2>}
                    <QtyRemoveWrapper>
                        <QuantityIncDec id={id} qty={props.quantity} name={name} defaultPrice={defaultPrice / 100} price={price / 100} />
                        <CartRemoveBtn onClick={() => removeItemFromCart(props)}><i class="fa-solid fa-trash" style={{ paddingRight: "4px" }}></i>{context.language === "en" ? langConfig[0].cart.delete.en : langConfig[0].cart.delete.hn}</CartRemoveBtn>
                    </QtyRemoveWrapper>
                </CardText>
            </CardCart>
        </>
    )
}
export default CartDataDisplay
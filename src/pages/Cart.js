import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { UserContext } from "../utilities/context/UserContext"
import CartDataDisplay from "../components/CartDataDisplay"
import { clearCart } from '../utilities/redux/cartSlice'
import { Context } from "../utilities/context/Context"
import Checkout from "./Checkout"
import Header from "../components/Header"


const Cart = () => {
    const username = useContext(UserContext)
    const context = useContext(Context)
    const items = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()

    const handleclearCart = () => {
        dispatch(clearCart())
    }

    console.log(context.quantity, "quantity", context.cartData)
    return (
        <>
            <Header />
            <h2 className="cart-head">CART</h2>
            <div className="cart-content-wrapper">
                {items.length !== 0 ? <>
                    <div className="cart-data">{items.map(data => <CartDataDisplay {...data} />)}
                        <div className="clear-cart-btn"><button onClick={handleclearCart}>Clear Cart</button></div>
                    </div>
                    <div><Checkout items={items} /></div>
                </> : context.cartData ? <div className="cart-data">{context.cartData?.map(item => <CartDataDisplay {...item} />)}
                    <div className="clear-cart-btn"><button onClick={handleclearCart}>Clear Cart</button></div>
                </div> : <div><h4 style={{ margin: "20px" }}>Add something</h4></div>}
            </div>

        </>
    )
}
export default Cart
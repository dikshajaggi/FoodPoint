import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { UserContext } from "../utilities/context/UserContext"
import CartDataDisplay from "../components/CartDataDisplay"
import { clearCart } from '../utilities/redux/cartSlice'
import { Context } from "../utilities/context/Context"
import Checkout from "./Checkout"
import Header from "../components/Header"
import { database } from "../utilities/firebase"
import { ref, remove } from "firebase/database"
import { CartContentWrapper, CartData, CartHead, ClearCartBtn } from "./styledComponents/Cart"


const Cart = () => {
    const username = useContext(UserContext)
    const context = useContext(Context)
    const items = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()

    const handleclearCart = () => {
        const dataRef = ref(database, "cart_items")
        // Delete data
        remove(dataRef)
        context.setCartData([])
        dispatch(clearCart())
    }

    console.log(context.quantity, "quantity", context.cartData)
    return (
        <>
            <Header />
            <CartHead>CART</CartHead>
            <CartContentWrapper>
                {items.length !== 0 ? <>
                    <CartData>{items.map(data => <CartDataDisplay {...data} />)}
                        <ClearCartBtn><button onClick={handleclearCart}>Clear Cart</button></ClearCartBtn>
                    </CartData>
                    <div><Checkout items={items} /></div>
                </> : context.cartData ? <CartData>{context.cartData?.map(item => <CartDataDisplay {...item} />)}
                    <ClearCartBtn><button onClick={handleclearCart}>Clear Cart</button></ClearCartBtn>
                </CartData> : <div><h4 style={{ margin: "20px" }}>Add something</h4></div>}
            </CartContentWrapper>

        </>
    )
}
export default Cart
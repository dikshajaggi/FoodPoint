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
import { CartContentWrapper, CartData, CartHead, ClearCartBtn, Wrapper, EmptyCart } from "./styledComponents/Cart"


const Cart = () => {
    const username = useContext(UserContext)
    const context = useContext(Context)
    const items = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    const [cleared, setCleared] = useState(false)

    const handleclearCart = () => {
        const dataRef = ref(database, "cart_items")
        // Delete data
        remove(dataRef)
        context.setCartData([])
        dispatch(clearCart())
        setCleared(true)
    }

    console.log(context.quantity, "quantity", context.cartData)
    return (
        <>
            <Header />
            <Wrapper>
                <CartHead>Food Cart</CartHead>
                <ClearCartBtn onClick={handleclearCart}>Clear Cart</ClearCartBtn>
            </Wrapper>
            <hr></hr>
            {cleared === false ? <CartContentWrapper>
                {items.length !== 0 ? <>
                    {console.log("empty")}
                    <CartData>
                        {items.map(data => <CartDataDisplay {...data} />)}
                    </CartData>
                    <div><Checkout items={items} /></div>
                </> : <EmptyCart><h4>Add something</h4></EmptyCart>}
                {context.cartData ? <CartData>{context.cartData?.map(item => <CartDataDisplay {...item} />)}
                </CartData> : console.log("EMPTY")}
            </CartContentWrapper> :
                <EmptyCart><h4>Add something</h4></EmptyCart>
            }
        </>
    )
}
export default Cart
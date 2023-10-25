import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { UserContext } from "../utilities/context/UserContext"
import CartDataDisplay from "../components/CartDataDisplay"
import { clearCart } from '../utilities/redux/cartSlice'
import { Context } from "../utilities/context/Context"
import Checkout from "./Checkout"
import Header from "../components/Header"
import { database } from "../utilities/firebase"
import { ref, remove } from "firebase/database"
import { CartContentWrapper, CartData, CartHead, ClearCartBtn, Wrapper, EmptyCart, CartWrapper } from "./styledComponents/Cart"
import Footer from "../components/Footer"


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
        context.setQuantity([])
        dispatch(clearCart())
        setCleared(true)
    }

    return (
        <div>
            <Header />
            <CartWrapper>
                <Wrapper>
                    <CartHead>Food Cart</CartHead>
                    <ClearCartBtn onClick={handleclearCart}>Clear Cart</ClearCartBtn>
                </Wrapper>
                <hr></hr>
                {cleared === false ? <CartContentWrapper>
                    {items.length !== 0 ? <>
                        <CartData>
                            {items.map(data => <CartDataDisplay {...data} />)}
                        </CartData>
                        <div><Checkout /></div>
                    </> : <EmptyCart><h4>Add something</h4></EmptyCart>}
                    {context.cartData ? <CartData>{context.cartData?.map(item => <CartDataDisplay {...item} />)}
                    </CartData> : null}
                </CartContentWrapper> :
                    <EmptyCart><h4>Add something</h4></EmptyCart>
                }
            </CartWrapper>
            <Footer />
        </div>
    )
}
export default Cart
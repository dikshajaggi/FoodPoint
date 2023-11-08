import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { UserContext } from "../utilities/context/UserContext"
import CartDataDisplay from "../components/CartDataDisplay"
import { clearCart } from '../utilities/redux/cartSlice'
import { Context } from "../utilities/context/Context"
import Checkout from "./Checkout"
import Header from "../components/Header"
import { auth, database } from "../utilities/firebase"
import { get, ref, remove } from "firebase/database"
import { CartContentWrapper, CartData, CartHead, ClearCartBtn, Wrapper, EmptyCart, CartWrapper } from "./styledComponents/Cart"
import Footer from "../components/Footer"


const Cart = () => {
    const context = useContext(Context)
    const dispatch = useDispatch()
    const [cleared, setCleared] = useState(false)
    const [fromDatabase, setFromDatabase] = useState([])

    console.log(context?.userId, "context?.userId")


    const handleclearCart = () => {
        context.setCartData([])
        context.setQuantity([])
        dispatch(clearCart())
        setCleared(true)
    }

    useEffect(() => {
        console.log(context.cartData, "context.cartData", cleared)
        if(cleared) {
            console.log("removed data")
            const dataRef = ref(database, `users/${context.userId}/cart`)
            // Delete data
            remove(dataRef)
        }
    }, [context.cartData])

    useEffect(() => {
        const cartDataRef = ref(database, `users/${context?.userId}/cart`);
        const cartDataQtyRef = ref(database, `users/${context?.userId}/quantity`);
        get(cartDataRef).then((snapshot) => {
            if (snapshot.exists()) {
            const cartData = snapshot.val();
         }   
        }).catch((error) => {
        console.error('Error getting cart data:', error);
        });
        
        get(cartDataQtyRef).then((snapshot) => {
            console.log(snapshot, "snapshot", snapshot.val())
            if (snapshot.exists()) {
            const cartDataQty = snapshot.val();
            setFromDatabase(cartDataQty)
            console.log(cartDataQty, "cart data qty")
         }   
        }).catch((error) => {
        console.error('Error getting cart data:', error);
        });
    }, [context.qty])

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
                    {fromDatabase !== undefined ? <>
                        <CartData>
                            {fromDatabase?.map(data => <CartDataDisplay {...data} />)}
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
import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import CartDataDisplay from "../components/CartDataDisplay"
import { clearCart } from '../utilities/redux/cartSlice'
import { Context } from "../utilities/context/Context"
import Checkout from "./Checkout"
import Header from "../components/Header"
import { CartMain, CartContentWrapper, CartData, CartHead, ClearCartBtn, Wrapper, EmptyCart, CartWrapper } from "./styledComponents/Cart"
import Footer from "../components/Footer"
import langConfig from "../config/langConfig.json"
import api from "../utilities/api"
import { UserContext } from "../utilities/context/UserContext"

const Cart = () => {
    const {userId} = useContext(UserContext)
    const context = useContext(Context)
    const items = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    const [cartData, setCartData] = useState([])

    const handleclearCart = async () => {
       const response =  await api.deleteAllCartItems(userId)
       if (response.success) {
        dispatch(clearCart())
       }
    }

    const getCartItems = async() => {
        const cartdata =  await api.getCartItems(userId)
        console.log(cartdata, "cartdata", userId)
        if (cartdata.success) setCartData(cartdata.items.items)
      }
  
      useEffect(() => {
          getCartItems()
          console.log(cartData, "getting cart items", items)
           // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [userId, items])

    return (
        <CartMain>
            <Header />
            <CartWrapper>
                <Wrapper>
                    <CartHead>{context.language === "en" ?  langConfig[0].cart.cart.en : langConfig[0].cart.cart.hn}</CartHead>
                    <ClearCartBtn onClick={handleclearCart}>{context.language === "en" ?  langConfig[0].cart.clear.en : langConfig[0].cart.clear.hn}</ClearCartBtn>
                </Wrapper>
                <hr></hr>
                <CartContentWrapper>
                    {cartData.length !== 0 ? <>
                        <CartData>{cartData?.map((c, index) => <CartDataDisplay key={index} {...c} />)}</CartData>
                        <div><Checkout cartData = {cartData} /></div>
                    </> : <EmptyCart><h4>{context.language === "en" ?  langConfig[0].cart.add.en : langConfig[0].cart.add.hn}</h4></EmptyCart>
                    }
                </CartContentWrapper>
            </CartWrapper>
            <Footer />
        </CartMain>
    )
}
export default Cart
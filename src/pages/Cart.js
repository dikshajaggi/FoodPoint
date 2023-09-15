import { useContext, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { UserContext } from "../utilities/context/UserContext"
import CartDataDisplay from "../components/CartDataDisplay"
import { clearCart } from '../utilities/redux/cartSlice'
import { Context } from "../utilities/context/Context"
import Checkout from "./Checkout"

const Cart = () => {
    const username = useContext(UserContext)
    const context = useContext(Context)
    const items = useSelector((store) => store.cart.items)

    const dispatch = useDispatch()

    const handleclearCart = () => {
        dispatch(clearCart())
    }

    console.log(context.quantity, "quantity")
    return (
        <>
            <header>
                <ul className='navbar'>
                    <Link to="/" style={{ textDecoration: 'none' }}><li>HOME</li></Link>
                    <Link to="/about" style={{ textDecoration: 'none' }}><li>ABOUT</li></Link>
                    <Link to="/offers" style={{ textDecoration: 'none' }}><li>OFFERS</li></Link>
                </ul>
                <div className='cart-wrapper'>
                    <h3 className="username">Welcome {username.user}</h3>
                    <Link to="/cart" style={{ textDecoration: 'none' }}><i class="fa-sharp fa-solid fa-cart-shopping"><span className='cart-items-length'>{items.length}</span></i></Link>
                </div>
            </header>
            <h2 className="cart-head">CART</h2>
            <div className="cart-content-wrapper">
                {items.length !== 0 ? <>
                    <div className="cart-data">{items.map(data => <CartDataDisplay {...data} />)}
                        <div className="clear-cart-btn"><button onClick={handleclearCart}>Clear Cart</button></div>
                    </div>
                    <div><Checkout items={items} /></div>
                </> : <div><h4 style={{ margin: "20px" }}>Add something</h4></div>}
            </div>

        </>
    )
}
export default Cart
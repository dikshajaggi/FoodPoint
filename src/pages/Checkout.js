import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../utilities/context/UserContext'
import { Context } from '../utilities/context/Context'

const Checkout = (props) => {
    const username = useContext(UserContext)
    const context = useContext(Context)
    const qty = context.quantity.filter((item) => props.id === item.id).length
    const total = []
    console.log(qty, "context.quantity.qty")
    props.items.map(item => total.push(item.price / 100))
    let sum = 0
    for (let i = 0; i < total.length; i++) {
        sum += total[i];
    }

    return (
        <div>
            <h4 style={{ fontWeight: 600, fontSize: "28px" }}>CHECKOUT</h4>
            <br></br>
            <div className='total'>
                <h4>Total items: {total.length}</h4>
                <h4>Total : {sum} {context.quantity.qty}</h4>
                <br></br>
                {username.user !== "" ? <Link className="link" to="/payment"><button>Checkout</button></Link> : <Link className="link" to="/login"><button>Checkout</button></Link>}
            </div>
        </div>
    )
}

export default Checkout

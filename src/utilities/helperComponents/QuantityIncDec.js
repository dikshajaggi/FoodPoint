import React, { useContext, useEffect, useState } from 'react'
import "./helperStyles.css"
import { Context } from '../context/Context'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/cartSlice'

const QuantityIncDec = (props) => {
    const context = useContext(Context)
    const items = useSelector(store => store.cart.items)
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(props.qty !== undefined ? props.qty : 1)

    console.log(quantity, "quantity", props.qty)
    const increase = (id) => {
        context.quantity.filter(item => {
            if (item.id === id) item.qty = item.qty + 1
        })
        setQuantity(quantity + 1)
    }
    const decrease = (id) => {
        context.quantity.filter(item => {
            if (item.id === id) item.qty = item.qty - 1
        })
        if (quantity !== 0) setQuantity(quantity - 1)
        else setQuantity(0)
    }

    useEffect(() => {
        if (props.qty !== undefined) setQuantity(props.qty)
    }, [props.qty])

    return (
        <div className='quantityIncDec'>
            {console.log("inc dec component")}
            <button className='inc-dec-btn' onClick={() => increase(props.id)}>+</button>
            <span className='inc-dec-span'>{quantity}</span>
            <button className='inc-dec-btn' onClick={() => decrease(props.id)}>-</button>
        </div>
    )
}

export default QuantityIncDec

import React, { useContext, useEffect, useState } from 'react'
import "./helperStyles.css"
import { Context } from '../context/Context'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/cartSlice'

const QuantityIncDec = (props) => {
    const context = useContext(Context)
    const [quantity, setQuantity] = useState(props.qty !== undefined ? props.qty : 1)

    const increase = (id) => {
        context.setQtyCheck(context.qtyCheck + 1)
        context.quantity.filter(item => {
            if (item.id === id) {
                item.qty = item.qty + 1
                item.price = item.qty * props.price
            }
        })
        setQuantity(quantity + 1)
    }
    const decrease = (id) => {
        context.setQtyCheck(context.qtyCheck + 1)
        context.quantity.filter(item => {
            if (item.id === id) {
                item.qty = item.qty - 1
                item.price = item.qty * props.price
                console.log(item.qty, item.price, "item.qty * item.price")
            }
        })
        if (quantity >= 1) setQuantity(quantity - 1)
        else setQuantity(0)
    }

    useEffect(() => {
        if (props.qty !== undefined) setQuantity(props.qty)
    }, [props.qty])


    return (
        <div className='quantityIncDec'>
            <button className='inc-dec-btn' onClick={() => increase(props.id)}>+</button>
            <span className='inc-dec-span'>{quantity}</span>
            <button className='inc-dec-btn' onClick={() => decrease(props.id)}>-</button>
        </div>
    )
}

export default QuantityIncDec

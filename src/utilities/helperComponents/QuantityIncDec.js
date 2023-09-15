import React, { useContext, useEffect, useState } from 'react'
import "./helperStyles.css"
import { Context } from '../context/Context'
import { useDispatch } from 'react-redux'

const QuantityIncDec = (props) => {
    const context = useContext(Context)
    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(1)

    const increase = (id) => {
        setQuantity(quantity + 1)
        context.setQuantity(prev => [...prev, { qty: quantity + 1, id: id }])
    }
    const decrease = (id) => {
        setQuantity(quantity - 1)
        // context.setQuantity(context.quantity.pop())
        context.setQuantity(prev => [...prev, { qty: quantity - 1, id: id }])
        if (quantity <= 1) context.setQuantity(prev => [...prev, { qty: 1, id: id }])

    }
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

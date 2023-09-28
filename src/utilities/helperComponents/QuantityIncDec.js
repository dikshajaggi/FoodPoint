import React, { useContext, useEffect, useState } from 'react'
import "./helperStyles.css"
import { Context } from '../context/Context'
import { useDispatch } from 'react-redux'

const QuantityIncDec = (props) => {
    const context = useContext(Context)
    const dispatch = useDispatch()
    let itemRemoved = ""
    const [quantity, setQuantity] = useState(1)

    const increase = (id) => {
        console.log("context quantity inc")
        setQuantity(quantity + 1)
        context.setQuantity(prev => [...prev, id])
    }
    const decrease = (id) => {
        setQuantity(quantity - 1)
        console.log(context.quantity, "context quantity", quantity - 1)
        const matchingOptions = context.quantity.filter(item => item === id)
        console.log(matchingOptions, "context quantity matching")

        if (matchingOptions.length > 0) {
            const index = context.quantity.indexOf(id)
            context.quantity.splice(index, 1)
        }
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

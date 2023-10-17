import React, { useContext, useEffect, useState } from 'react'
import "./helperStyles.css"
import { Context } from '../context/Context'
import { useDispatch } from 'react-redux'

const QuantityIncDec = (props) => {
    const context = useContext(Context)
    const [quantity, setQuantity] = useState(1)

    const increase = (id) => {
        context.quantity.filter(item => {
            if (item.id === id) item.qty = item.qty + 1
        })
        setQuantity(quantity + 1)
        console.log(context.quantity, "checking cart quantity")
        // context.setQuantity(prev => [...prev, id])
    }
    const decrease = (id) => {
        context.quantity.filter(item => {
            if (item.id === id) item.qty = item.qty - 1
        })
        setQuantity(quantity - 1)
        console.log(context.quantity, "checking cart quantity")

        // const matchingOptions = context.quantity.filter(item => item === id)
        // console.log(matchingOptions, "context quantity matching")

        // if (matchingOptions.length > 0) {
        //     const index = context.quantity.indexOf(id)
        //     context.quantity.splice(index, 1)
        // }
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

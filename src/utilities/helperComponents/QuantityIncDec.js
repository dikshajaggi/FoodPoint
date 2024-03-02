import React, { useEffect, useState } from 'react'
import "./helperStyles.css"
import { useDispatch } from 'react-redux'
import { setItemQuantityDec, setItemQuantityInc } from '../redux/cartSlice'

const QuantityIncDec = (props) => {

    const dispatch = useDispatch()
    const [itemQty, setItemQty] = useState()

    const increase = (id) => {
        setItemQty(prevQty => prevQty + 1);
        dispatch(setItemQuantityInc(id))
    }
    const decrease = (id) => {
        if (itemQty > 0) {
            setItemQty(prevQty => prevQty - 1);
            dispatch(setItemQuantityDec(id));
        }
    }

    useEffect(() => {
        setItemQty(props.qty)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.qty])

    return (
        <div className='quantityIncDec'>
            <button className='inc-dec-btn' onClick={() => increase(props.id)}>+</button>
            <span className='inc-dec-span'>{itemQty}</span>
            <button className='inc-dec-btn' onClick={() => decrease(props.id)}>-</button>
        </div>
    )
}

export default QuantityIncDec

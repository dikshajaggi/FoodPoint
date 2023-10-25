import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'

const CheckoutLogic = (props) => {
    const { price, id, name } = props
    const context = useContext(Context)
    const total = []

    // props.items.map(item => total.push(item.price / 100))
    // let sum = 0
    // for (let i = 0; i < total.length; i++) {
    //     sum += total[i];
    // }

    // const [array, setArray] = useState([])
    useEffect(() => {
        // const item = context.quantity.filter(item => {
        //     if (item.id === id) return item
        // {
        //     const totalPrice = item.qty * (price / 100)
        //     array.push({ id: id, name: name, totalPrice: totalPrice, qty: item.qty })
        // }
        // })
        console.log(context.qtyChanged, "context.qtyChanged.push(item)")
        // console.log(item, "item")
    }, [context.qtyCheck])

    // context.specificItemTotal.push(array)
    return null
}

export default CheckoutLogic

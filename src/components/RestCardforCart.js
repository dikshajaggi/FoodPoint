import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Context } from '../utilities/context/Context'
import { addItems } from '../utilities/redux/cartSlice'
import QuantityIncDec from "../utilities/helperComponents/QuantityIncDec"
import { AddBtnWrapper, AddDishBtn, DishImg, ItemAdd, ItemAddData, MenuDishName, SpecificCardSubHead } from './styledComponents/RestCardforCart'
import { database } from "../utilities/firebase/index"
import { push, ref, set } from '@firebase/database'

const SpecificCard = (props) => {
    console.log(props, "props")
    const { name, defaultPrice, price, description, id, itemAttribute, imageId, category } = props
    const context = useContext(Context)
    const dispatch = useDispatch()
    const [flag, setFlag] = useState(0)

    const addItemToCart = async (data) => {
        setFlag(1)
        const newRef = push(ref(database, "cart_items"))
        set(newRef, data)
        dispatch(addItems(data))
        context.setQuantity(prev => [...prev, { id: id, qty: 1 }])
    }

    const idArray = []
    if (context.quantity?.length !== 0) context.quantity.map(item => {
        idArray.push(item.id)
    })

    console.log(id, idArray, "checking id array")

    useEffect(() => {
        console.log("checking item quantity", context.quantity)
        if (context.quantity.length !== 0) {
            setFlag(1)
        }
        if (context.quantity.length === 0) {
            setFlag(0)
        }
        context.quantity.map(item => {
            if (item.id === id) {
                if(item.qty === 0) {
                    setFlag(0)
                }
            }
        })
    }, [])

    return (
        <ItemAdd>
            <DishImg> <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150,h_150,c_fit/${imageId}`} alt="" /> </DishImg>
            <ItemAddData>
                <MenuDishName>{name} {id}</MenuDishName>
                <h2><SpecificCardSubHead>{itemAttribute.vegClassifier} | {category} </SpecificCardSubHead></h2>
                {price ? <h2 style={{ fontSize: "18px" }}><SpecificCardSubHead>Price: </SpecificCardSubHead> Rs.{(price) / 100}</h2> : <h2 style={{ fontSize: "18px" }}><SpecificCardSubHead>Price: </SpecificCardSubHead> Rs.{(defaultPrice) / 100}</h2>}
                <h2 style={{ fontSize: "14px" }}>{description?.slice(0, 200)}...</h2>
            </ItemAddData>
            <AddBtnWrapper>
                {flag === 0 ? <AddDishBtn onClick={() => addItemToCart(props)}>ADD</AddDishBtn> : idArray.includes(id) ? <QuantityIncDec id={id} /> : <AddDishBtn onClick={() => addItemToCart(props)}>ADD</AddDishBtn>}
            </AddBtnWrapper>
        </ItemAdd>
    )
}

export default SpecificCard

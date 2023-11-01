import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Context } from '../utilities/context/Context'
import { addItems } from '../utilities/redux/cartSlice'
import QuantityIncDec from "../utilities/helperComponents/QuantityIncDec"
import { AddBtnWrapper, AddDishBtn, DishDesc, DishImg, Image, ItemAdd, ItemAddData, MenuDishName, SpecificCardSubHead, VegClassifierIcon } from './styledComponents/RestCardforCart'
import { database } from "../utilities/firebase/index"
import { push, ref, set } from '@firebase/database'
import nonveg from "../assets/nonveg.png"
import veg from "../assets/veg.png"

const SpecificCard = (props) => {
    const { name, defaultPrice, price, description, id, itemAttribute, imageId, category } = props
    const context = useContext(Context)
    const dispatch = useDispatch()
    const [flag, setFlag] = useState(0)
    const [qty, setQty] = useState()


    const addItemToCart = async (data) => {
        setFlag(1)
        const newRef = push(ref(database, "cart_items"))
        set(newRef, data)
        dispatch(addItems(data))
        context.setQuantity(prev => [...prev, { id: id, qty: 1, name: name, price: price / 100 }])
    }

    const idArray = []
    if (context.quantity?.length !== 0) context.quantity.map(item => {
        idArray.push(item.id)
    })

    useEffect(() => {
        if (context.quantity.length !== 0) {
            context.quantity.map(item => {
                if (item.id === id) if (item.qty === 0) setFlag(0); else setFlag(1)
            })
        }
        if (context.quantity.length === 0) {
            setFlag(0)
        }
        context.quantity.filter(item => {
            if (item.id === id) setQty(item.qty)
        })
    }, [context.quantity])

    return (
        <ItemAdd>
            <DishImg> <Image src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150,h_150,c_fit/${imageId}`} alt="" /> </DishImg>
            <ItemAddData>
            {itemAttribute?.vegClassifier === "VEG" ? <VegClassifierIcon src = {veg} /> : <VegClassifierIcon src= {nonveg} />}
                <MenuDishName>{name}</MenuDishName>
                <SpecificCardSubHead>{category} </SpecificCardSubHead>
                {price ? <h2 style={{ fontSize: "14px" }}> ₹{(price) / 100}</h2> : <h2 style={{ fontSize: "14px" }}> ₹{(defaultPrice) / 100}</h2>}
                <DishDesc>{description?.slice(0, 400)}...</DishDesc>
            </ItemAddData>
            <AddBtnWrapper>
                {flag === 0 ? <AddDishBtn onClick={() => addItemToCart(props)}>ADD</AddDishBtn> : idArray.includes(id) ? <QuantityIncDec id={id} qty={qty} name={name} price={price / 100} /> : <AddDishBtn onClick={() => addItemToCart(props)}>ADD</AddDishBtn>}
            </AddBtnWrapper>
        </ItemAdd>
    )
}

export default SpecificCard

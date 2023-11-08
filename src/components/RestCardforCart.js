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
import CartConfirmation from './CartConfirmation'

const SpecificCard = (props) => {
    const { name, defaultPrice, price, description, id, itemAttribute, imageId, category, restId } = props
    console.log(restId, "restId")
    const context = useContext(Context)
    const dispatch = useDispatch()
    const [flag, setFlag] = useState(0)
    const [qty, setQty] = useState()
    const [matched, setMatched] = useState(true)
    let matchedRest = true

    const checkIfmatched = () => {
        context?.quantity?.map(item => {
            if (item.restId !== restId) {
                context.setShowModal(true)
                setMatched(false)
                matchedRest = false
            } 
        })
    }

    const addItemToCart = async (data) => {
        checkIfmatched()
        setFlag(1)
        // const newRef = push(ref(database, "cart_items"))
        // set(newRef, data)
        if(matchedRest) {
            dispatch(addItems(data))
            context.setQuantity(prev => [...prev, { id: id, qty: 1, name: name, price: price / 100, restId: restId }])
        }
    }

    if (context.quantity?.length !== 0) context.quantity.map(item => {
            // context.idArray.push(item.id)
        if(matched) context.idArray.push(item.id)
        else if (matched === false) {
            console.log("running", context.start, context.cartChoiceNo)
            if (context.cartChoiceNo) return null
            if (context.start) {
                console.log("checking context id array")
                context.idArray.push(item.id)
            }
        }
    })


    
    useEffect(() => {
        context.setCartChoiceNo(false)
        context.setStart(false)
        matchedRest = true
    }, [context.cartChoiceNo, context.setStart])

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
                {console.log(context.idArray.includes(id), flag, "checking flag ")}
                {flag === 0 ? <AddDishBtn onClick={() => addItemToCart(props)}>ADD</AddDishBtn> : context.idArray.includes(id) ? <QuantityIncDec id={id} qty={qty} name={name} price={price / 100} /> : <AddDishBtn onClick={() => addItemToCart(props)}>ADD</AddDishBtn>}
            </AddBtnWrapper>
            {context.showModal ? <CartConfirmation  data = {props} /> : null}
        </ItemAdd>
    )
}

export default SpecificCard

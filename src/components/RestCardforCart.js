import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Context } from '../utilities/context/Context'
import { addItems } from '../utilities/redux/cartSlice'
import QuantityIncDec from "../utilities/helperComponents/QuantityIncDec"
import { ItemAdd, ItemAddData, MenuDishName, SpecificCardSubHead } from './styledComponents/RestCardforCart'

const SpecificCard = (props) => {
    console.log(props, "props")
    const { name, defaultPrice, price, description, id, itemAttribute, imageId, category } = props
    const context = useContext(Context)
    const dispatch = useDispatch()

    const [flag, setFlag] = useState(0)

    const addItemToCart = (data) => {
        setFlag(1)
        dispatch(addItems(data))
        context.setQuantity(prev => [...prev, id])
    }
    return (
        <ItemAdd>
            <ItemAddData>
                <MenuDishName>{name}</MenuDishName>
                <h2><SpecificCardSubHead>{itemAttribute.vegClassifier} | {category} </SpecificCardSubHead></h2>
                {price ? <h2><SpecificCardSubHead>Price: </SpecificCardSubHead> Rs.{(price) / 100}</h2> : <h2><SpecificCardSubHead>Price: </SpecificCardSubHead> Rs.{(defaultPrice) / 100}</h2>}
                <h2>{description}</h2>
            </ItemAddData>
            {flag === 0 ? <button onClick={() => addItemToCart(props)}>ADD</button> : <QuantityIncDec id={id} />}
        </ItemAdd>
    )
}

export default SpecificCard

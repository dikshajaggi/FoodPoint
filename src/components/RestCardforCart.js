import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Context } from '../utilities/context/Context'
import { addItems } from '../utilities/redux/cartSlice'
import QuantityIncDec from "../utilities/helperComponents/QuantityIncDec"

const SpecificCard = (props) => {
    console.log(props, "props")
    const { name, defaultPrice, price, description, id, itemAttribute, imageId, category } = props
    const context = useContext(Context)
    const dispatch = useDispatch()

    const [flag, setFlag] = useState(0)

    const addItemToCart = (data) => {
        setFlag(1)
        dispatch(addItems(data))
        context.setQuantity(prev => [...prev, { qty: 1, id: id }])
    }
    return (
        <div className='item-add'>
            <div className='item-add-data'>
                <h2 className='menu-dish-name'>{name}</h2>
                <h2><span className='specific-card-subheading'>{itemAttribute.vegClassifier} | {category} </span></h2>
                {price ? <h2><span className='specific-card-subheading'>Price: </span> Rs.{(price) / 100}</h2> : <h2><span className='specific-card-subheading'>Price: </span> Rs.{(defaultPrice) / 100}</h2>}
                <h2>{description}</h2>
            </div>
            {flag === 0 ? <button onClick={() => addItemToCart(props)}>ADD</button> : <QuantityIncDec id={id} />}
        </div>
    )
}

export default SpecificCard

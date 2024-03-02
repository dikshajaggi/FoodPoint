import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItems, removeItem } from '../utilities/redux/cartSlice'
import { AddBtnWrapper, AddDishBtn, DishDesc, DishImg, Image, ItemAdd, ItemAddData, MenuDishName, SpecificCardSubHead } from './styledComponents/RestCardforCart'
// import { database } from "../utilities/firebase/index"
// import { push, ref, set } from '@firebase/database'
// import nonveg from "../assets/nonveg.png"
// import veg from "../assets/veg.png"

const SpecificCard = (props) => {
    console.log(props, "proppppppppssssssss")
    const { name, price, description, id, imageId, category, defaultPrice } = props
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.items)

    const addItemToCart = (data) => {
        dispatch(addItems(data))
    }

    const removeItemFromCart = (data) => {
        dispatch(removeItem(data))
    }

    console.log(cartItems, "cartitems")

    return (
        <ItemAdd>
            <DishImg> <Image src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150,h_150,c_fit/${imageId}`} alt="" /> </DishImg>
            <ItemAddData>
                {/* {itemAttribute?.vegClassifier === "VEG" ? <VegClassifierIcon src={veg} /> : <VegClassifierIcon src={nonveg} />} */}
                <MenuDishName>{name}</MenuDishName>
                <SpecificCardSubHead>{category} </SpecificCardSubHead>
                {defaultPrice ? <h2 style={{ fontSize: "14px" }}>  ₹{(defaultPrice) / 100}</h2> : <h2 style={{ fontSize: "14px" }}>  ₹{(price) / 100}</h2>}
                <DishDesc>{description?.slice(0, 400)}...</DishDesc>
            </ItemAddData>
            <AddBtnWrapper>
            {cartItems.length !== 0 && cartItems.some(c => c.item.id === id) ? <AddDishBtn onClick={() => removeItemFromCart(props)}>REMOVE</AddDishBtn> : <AddDishBtn onClick={() => addItemToCart(props)}>ADD</AddDishBtn>} 
            </AddBtnWrapper>
        </ItemAdd>
    )
}

export default SpecificCard

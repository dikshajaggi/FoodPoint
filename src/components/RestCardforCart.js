import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItems, removeItem } from '../utilities/redux/cartSlice'
import { AddBtnWrapper, AddDishBtn, DishDesc, DishImg, Image, ItemAdd, ItemAddData, MenuDishName, SpecificCardSubHead } from './styledComponents/RestCardforCart'
import langConfig from "../config/langConfig.json"
import { Context } from '../utilities/context/Context'
import api from '../utilities/api'
import { UserContext } from '../utilities/context/UserContext'
import { toast } from 'react-toastify'

const SpecificCard = (props) => {
    const { name, price, description, id, imageId, category, defaultPrice } = props
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.items)
    const context = useContext(Context)
    const { userId } = useContext(UserContext)

    const addItemToCart = async (restData) => {
        if(userId) {
            const data = {
                user: userId,
                menu: restData,
                quantity: 1
            }
            dispatch(addItems(data))
            const res = await api.addToCart(data)
            if (res.status === 201) toast.success("Item added to cart")
        }
    }

    const removeItemFromCart = async (restData) => {
        if (userId) {
            dispatch(removeItem(restData.id))
            const itemsRemoved = cartItems.filter(item => item.menu.id !== restData.id)
            localStorage.setItem('cartItems', JSON.stringify(itemsRemoved))
            const res = await api.deleteSpecificCartItem(userId, restData.id)
            if(res.status === 200) toast.success("Item removed from cart")
        }
    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems])

    const isInCart = cartItems.some(c => c.menu.id === id)

    return (
        <ItemAdd>
            <DishImg> <Image src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150,h_150,c_fit/${imageId}`} alt="" /> </DishImg>
            <ItemAddData>
                <MenuDishName>{name}</MenuDishName>
                <SpecificCardSubHead>{category}</SpecificCardSubHead>
                {defaultPrice ? <h2 style={{ fontSize: "14px", color: "#C2C1C1" }}>₹{defaultPrice / 100}</h2> : <h2 style={{ fontSize: "14px", color: "#C2C1C1" }}>₹{price / 100}</h2>}
                <DishDesc>{description?.slice(0, 400)}...</DishDesc>
            </ItemAddData>
            <AddBtnWrapper>
                {isInCart ? 
                    <AddDishBtn onClick={() => removeItemFromCart(props)}>
                        {context.language === "en" ? langConfig[0].rest_card.remove.en : langConfig[0].rest_card.remove.hn}
                    </AddDishBtn> 
                    : 
                    <AddDishBtn onClick={() => addItemToCart(props)}>
                        {context.language === "en" ? langConfig[0].rest_card.add_to_cart.en : langConfig[0].rest_card.add_to_cart.hn}
                    </AddDishBtn>
                }
            </AddBtnWrapper>
        </ItemAdd>
    )
}

export default SpecificCard

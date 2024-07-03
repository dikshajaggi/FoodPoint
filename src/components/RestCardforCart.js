import React, { useContext, useEffect, useState } from 'react'
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
    console.log(id, "idcheck")
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.items)
    console.log(cartItems, "cartItems")
    const context = useContext(Context)
    const { userId } = useContext(UserContext)
    const [cartData, setCartData] = useState([])

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems.items));
    }, [cartItems]);


    const addItemToCart = async (restData) => {
        const data = {
            user: userId,
            menu: restData,
            quantity: 1
        }
        dispatch(addItems(data))
        const res = await api.addToCart(data)
        if (res.status === 201) toast.success("Item added to cart")
    }

    const removeItemFromCart = async (restData) => {
        const data = {
            id: restData.menu.id
        }
        dispatch(removeItem(data))
        const res = await api.deleteSpecificCartItem(userId, restData.menu.id)
        if(res.status === 200) toast.success("Item removed from cart")
    }

    const getAllCartItems = async () => {
       const cartData = await api.getCartItems(userId)
       console.log(cartData, "data cart")
       if (cartData.success) {
        setCartData(cartData.items)
        localStorage.setItem('cartItems', JSON.stringify(cartData.items.items));
       }
    }

    useEffect(() => {
        getAllCartItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartItems])

    return (
        <ItemAdd>
            <DishImg> <Image src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150,h_150,c_fit/${imageId}`} alt="" /> </DishImg>
            <ItemAddData>
                <MenuDishName>{name}</MenuDishName>
                <SpecificCardSubHead>{category} </SpecificCardSubHead>
                {defaultPrice ? <h2 style={{ fontSize: "14px", color: "#C2C1C1"}}>  ₹{(defaultPrice) / 100}</h2> : <h2 style={{ fontSize: "14px", color: "#C2C1C1" }}>  ₹{(price) / 100}</h2>}
                <DishDesc>{description?.slice(0, 400)}...</DishDesc>
            </ItemAddData>
            <AddBtnWrapper>
                {cartData.length !== 0 && cartData.user === userId && cartData.items.some(c => c.menu.id === id) ? <AddDishBtn onClick={() => removeItemFromCart(props)}>{context.language === "en" ? langConfig[0].rest_card.remove.en : langConfig[0].rest_card.remove.hn}</AddDishBtn> : <AddDishBtn onClick={() => addItemToCart(props)}>{context.language === "en" ? langConfig[0].rest_card.add_to_cart.en : langConfig[0].rest_card.add_to_cart.hn}</AddDishBtn>}
            </AddBtnWrapper>
        </ItemAdd>
    )
}

export default SpecificCard

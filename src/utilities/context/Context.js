import { createContext, useContext, useEffect, useState } from "react";
import data from "../../assets/data.json"
import api from "../api";
import {generateOrderNumber} from "../OrderNumberGenerator.js"
import { UserContext } from "./UserContext.js";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

const value = "value"
const Context = createContext(value)

const ContextProvider = (props) => {
    const { userId } = useContext(UserContext)
    const cartStoreData = useSelector(state => state.cart.items)
    const [flag, setFlag] = useState(0)
    const [quantity, setQuantity] = useState([])
    const [filter, setFilter] = useState("relevance")
    const [filteredData, setFilteredData] = useState(data.restaurants)
    const [cartData, setCartData] = useState([])
    const [qtyCheck, setQtyCheck] = useState(0)
    const [favRest, setFavRest] = useState([])
    const [totalItems, setTotalItems] = useState()
    const [totalPrice, setTotalPrice] = useState()
    const [location, setLocation] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [cartChoiceNo, setCartChoiceNo] = useState(false)
    const [start, setStart] = useState(false)
    const [idArray, setIdArray] = useState([])
    const [searched, setSearched] = useState(false)
    const [status, setStatus] = useState([])
    const [orderPlaced, setOrderPlaced] = useState(false)
    const [orderStatus, setOrderStatus] = useState()
    // const statusArr = ["placed", "confirmed", "processing", "delivery", "end"]
    const [language, setLanguage] = useState("en")
    const [orderDetails, setOrderDetails] = useState(null)
    const [qtyUpdated, setQtyUpdated] = useState(false)
    const [cart, setCart] = useState([])
    const orderNumber = generateOrderNumber();

    const fetchRestData = async() => {
        await api.allRestData().then(data => {
            setFilteredData(data)
        })
    }

    const getCartItems = async() => {
        const cartdata = localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
            setCart(cartdata)
      }

    useEffect(() => {
        fetchRestData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId])

    useEffect(() => {
        console.log(cartStoreData, "setCart(cartdata.items.items)")
        setCart(cartStoreData)
        getCartItems()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId, cartStoreData])

    return (
        <Context.Provider
            value={{
                flag,
                setFlag,
                quantity,
                setQuantity,
                filter,
                setFilter,
                filteredData,
                setFilteredData,
                cartData,
                setCartData,
                qtyCheck,
                setQtyCheck,
                favRest,
                setFavRest,
                totalItems,
                setTotalItems,
                totalPrice,
                setTotalPrice,
                location,
                setLocation,
                showModal,
                setShowModal,
                cartChoiceNo,
                setCartChoiceNo,
                start,
                setStart,
                idArray,
                setIdArray,
                searched,
                setSearched,
                status,
                setStatus,
                orderPlaced,
                setOrderPlaced,
                orderStatus,
                setOrderStatus,
                language,
                setLanguage,
                orderDetails,
                setOrderDetails,
                qtyUpdated,
                setQtyUpdated,
                cart,
                setCart,
                orderNumber
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }
import { createContext, useEffect, useState } from "react";
import data from "../../assets/data.json"
import api from "../api";
// import { useDispatch } from "react-redux";

const value = "value"
const Context = createContext(value)

const ContextProvider = (props) => {
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
    const statusArr = ["placed", "confirmed", "processing", "delivery", "end"]
    const [language, setLanguage] = useState("en")

    const fetchRestData = async() => {
        await api.allRestData().then(data => {
            setFilteredData(data)
        })
    }

    useEffect(() => {
        fetchRestData()
    }, [])

    useEffect(() => {
        if (orderPlaced === true) {
            console.log("placedddddddddddddddd", statusArr)
            statusArr.forEach((item, index) => {
                setTimeout(() => {
                    setOrderStatus(item)
                    setStatus(prev => [...prev, item]); // Ensure a new array instance is created
                }, index * 10000);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [orderPlaced])

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     const dataRef = ref(database, "cart_items");

    //     get(dataRef)
    //         .then((snapshot) => {
    //             if (snapshot.exists()) {
    //                 const data = snapshot.val();
    //                 // Extract the values from the object into an array
    //                  const objectDataArr = Object.values(data);
    //                 console.log(objectDataArr, "object")
    //                 setCartData(objectDataArr)
    //                 for (const data of objectDataArr) {
    //                     dispatch(addItems(data))
    //                 }
    //             } else {
    //                 console.log("No data available");
    //             }
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });


    // }, []);

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
                setLanguage
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }
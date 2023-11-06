import { createContext, useEffect, useState } from "react";
import { data } from "../../assets/data"
import { database } from "../firebase";
import { get, ref } from "@firebase/database";
import { addItems } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const value = "value"
const Context = createContext(value)

const ContextProvider = (props) => {
    const [flag, setFlag] = useState(0)
    const [quantity, setQuantity] = useState([])
    const [restData, setrestData] = useState(data)
    const [filter, setFilter] = useState("relevance")
    const [filteredData, setFilteredData] = useState(restData)
    const [cartData, setCartData] = useState([])
    const [qtyCheck, setQtyCheck] = useState(0)
    const [favRest, setFavRest] = useState([])
    const [totalItems, setTotalItems] = useState()
    const [totalPrice, setTotalPrice] = useState()
    const [location, setLocation] = useState(null)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     const dataRef = ref(database, "cart_items");

    //     get(dataRef)
    //         .then((snapshot) => {
    //             if (snapshot.exists()) {
    //                 const data = snapshot.val();
    //                 // Extract the values from the object into an array
    //                 const objectDataArr = Object.values(data);
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
                restData,
                setrestData,
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
                setLocation
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }
import { createContext, useState } from "react";
import { data } from "../../assets/data"

const value = "value"
const Context = createContext(value)

const ContextProvider = (props) => {
    const [flag, setFlag] = useState(0)
    const [quantity, setQuantity] = useState([])
    const [restData, setrestData] = useState(data)
    const [filter, setFilter] = useState("relevance")
    const [filteredData, setFilteredData] = useState(restData)

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
                setFilteredData
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }
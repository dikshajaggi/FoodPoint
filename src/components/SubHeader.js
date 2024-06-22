import React, { useContext } from 'react'
import { Tab, Wrapper } from './styledComponents/SubHeader'
import { Context } from '../utilities/context/Context'
import langConfig from "../config/langConfig.json"

const SubHeader = (props) => {
    const context = useContext(Context)
    return (
        <Wrapper>
            <Tab tab="1" onClick={() => props.setActive("current")}><h5 style={{ fontWeight: 400, cursor: "pointer" }} >{context.language === "en" ? langConfig[0].orders.current.en : langConfig[0].orders.current.hn}</h5></Tab>
            <Tab onClick={() => props.setActive("prev")}><h5 style={{ fontWeight: 400, cursor: "pointer" }}>{context.language === "en" ? langConfig[0].orders.prev.en : langConfig[0].orders.prev.hn}</h5></Tab>
        </Wrapper >
    )
}

export default SubHeader

import React from 'react'
import { Tab, Wrapper } from './styledComponents/SubHeader'

const SubHeader = (props) => {
    return (
        <Wrapper>
            <Tab tab="1" onClick={() => props.setActive("current")}><h5 style={{ fontWeight: 400, cursor: "pointer" }} >Current Order</h5></Tab>
            <Tab onClick={() => props.setActive("prev")}><h5 style={{ fontWeight: 400, cursor: "pointer" }}>Previous Orders</h5></Tab>
        </Wrapper >
    )
}

export default SubHeader

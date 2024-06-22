import React, { useContext } from 'react'
import { OrderListDiv, Wrapper, DetailsWrapper } from './styledComponents/OrderList';
import { ButtonClose } from '../pages/styledComponents/Payment';
import langConfig from "../config/langConfig.json"
import { Context } from '../utilities/context/Context';

const OrderLIst = ({ items, onClose }) => {
    const context= useContext(Context)
    console.log(items, "orderlist")
    const data = Array.isArray(items) ? items : [items]
    console.log(data, "datadata", [items])
    return (
        <Wrapper>
            <ButtonClose onClick={onClose}><i class="fa-solid fa-xmark" style={{ fontSize: "18px" }}></i></ButtonClose>
            <h6>{context.language === "en" ? langConfig[0].orders.your_order.en : langConfig[0].orders.your_order.hn}</h6>
            {data.map((item, index) => (
                <OrderListDiv key={index}>
                    <DetailsWrapper>
                        <h6>{item.item.name}</h6>
                        <p>Price: {item.item.price? item.item.price / 100 : item.item.defaultPrice / 100}</p>
                        <p>Quantity: {item.quantity}</p>
                    </DetailsWrapper>
                    <p>{item.item.description}</p>
                </OrderListDiv>
            ))}
        </Wrapper>
    );
}

export default OrderLIst

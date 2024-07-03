import React, { useContext } from 'react'
import { OrderListDiv, Wrapper, DetailsWrapper } from './styledComponents/OrderList';
import { ButtonClose } from '../pages/styledComponents/Payment';
import langConfig from "../config/langConfig.json"
import { Context } from '../utilities/context/Context';

const OrderLIst = ({ items, onClose }) => {
    const context= useContext(Context)
    const data = items.map(item => item)
    return (
        <Wrapper>
            <ButtonClose onClick={onClose}><i class="fa-solid fa-xmark" style={{ fontSize: "18px" }}></i></ButtonClose>
            <h6>{context.language === "en" ? langConfig[0].orders.your_order.en : langConfig[0].orders.your_order.hn}</h6>
            {data.map((item, index) => (
                <OrderListDiv key={index}>
                    <DetailsWrapper>
                        <h6>{item.menu.name}</h6>
                        <p>Price: {item.menu.price? item.menu.price / 100 : item.menu.defaultPrice / 100}</p>
                        <p>Quantity: {item.quantity}</p>
                    </DetailsWrapper>
                    <p>{item.menu.description}</p>
                </OrderListDiv>
            ))}
        </Wrapper>
    );
}

export default OrderLIst

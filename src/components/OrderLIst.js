import React from 'react'
import { OrderListDiv, Wrapper, DetailsWrapper } from './styledComponents/OrderList';
import { ButtonClose } from '../pages/styledComponents/Payment';

const OrderLIst = ({ items, onClose }) => {
    console.log(items, "orderlist")
    return (
        <Wrapper>
            <ButtonClose onClick={onClose}><i class="fa-solid fa-xmark" style={{ fontSize: "18px" }}></i></ButtonClose>
            <h6>Your Order</h6>
            {items.map((item, index) => (
                <OrderListDiv key={index}>
                    <DetailsWrapper>
                        <h6>{item.item.name}</h6>
                        <p>Price: {item.item.finalPrice}</p>
                        <p>Quantity: {item.quantity}</p>
                    </DetailsWrapper>
                    <p>{item.item.description}</p>
                </OrderListDiv>
            ))}
        </Wrapper>
    );
}

export default OrderLIst

import styled from "styled-components";

const CartHead = styled.h2`
text-align: center;
`

const CartContentWrapper = styled.div`
display: flex;
    flex-wrap: wrap;
`

const CartData = styled.div`
width: 60%;
`

const ClearCartBtn = styled.div`
margin-bottom: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export { CartHead, CartContentWrapper, CartData, ClearCartBtn}
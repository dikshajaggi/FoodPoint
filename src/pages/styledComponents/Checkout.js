import styled from "styled-components";

const CheckoutLabel = styled.h4`
font-weight: 600, 
font-size: 28px; 
`

const CheckoutBtn = styled.button`
border: 1px solid ${props => props.theme.colors.accent};
border-radius: 5px;
height: 6vh;
width: 10vw;
color: white;
font-weight: 500;
background-color: ${props => props.theme.colors.accent};
`
const TotalWrapper = styled.div``

export { TotalWrapper, CheckoutLabel, CheckoutBtn }
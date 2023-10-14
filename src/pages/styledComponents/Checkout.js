import styled from "styled-components";

const CheckoutWrapper = styled.div`
display:flex;
flex-direction:column;
align-items: center; 
justify-content:center;
background-color: white;
border-radius: 8px;
padding: 4vh;
width: 25vw;
height: 34vh;
border: 2px solid ${props => props.theme.colors.accent}
`

const CheckoutLabel = styled.h5`
font-weight: 500, 
font-size: 20px; 
`

const TotalLabels = styled.h6`
font-size: 18px;
`

const CheckoutBtn = styled.button`
align-self: flex-end;
border:none;
border-radius: 5px;
height: 6vh;
width: 21vw;
background-color: ${props => props.theme.colors.accent};
font-weight: 500;
color: white;
`
const TotalWrapper = styled.div`
height:10vh;
width: 100%;
margin-bottom:2vh;
`

export { TotalWrapper, CheckoutLabel, CheckoutBtn, TotalLabels, CheckoutWrapper }
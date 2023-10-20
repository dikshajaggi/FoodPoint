import styled from "styled-components";

const CartWrapper = styled.div`
height:auto;
position: relative
`

const CartHead = styled.h2`
padding-left:6vw;
padding-top:4vh;
text-align: left;
font-size: 22px;
`

const CartContentWrapper = styled.div`
display: flex;
flex-wrap: wrap;
`

const CartData = styled.div`
width: 60%;
`

const Wrapper = styled.div`
margin-bottom: 2vh;
width:100%;
display: flex;
justify-content: space-between;
align-items: center;
`
const ClearCartBtn = styled.button`
background-color:transparent;
margin-top: 2vh;
margin-right:6vw;
border-radius:15px;
width: 10vw;
border: 2px solid ${props => props.theme.colors.accent}
`

const EmptyCart = styled.div`
width:90%;
height:50vh;
margin:auto;
`

export { CartHead, CartContentWrapper, CartData, ClearCartBtn, Wrapper, EmptyCart, CartWrapper }
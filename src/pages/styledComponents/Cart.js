import styled from "styled-components";

const CartMain = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color:  ${props => props.theme.colors.main};
color: #d0d0d0;
`

const CartWrapper = styled.div`
height:auto;
position: relative;
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
@media only screen and (max-width: 600px)  {
    flex-direction: column-reverse;
    }
@media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
    flex-direction: column-reverse;
}
`

const CartData = styled.div`
width: 60%;
@media only screen and (max-width: 600px)  {
  width:100%;
    }
    @media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
      width:100%;
}
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
color:  ${props => props.theme.colors.text};
border: 2px solid ${props => props.theme.colors.accent};
@media only screen and (max-width: 600px)  {
  width: 35vw;
    }
    @media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
      width: 35vw;
}
`

const EmptyCart = styled.div`
width:90%;
height:50vh;
margin:auto;
`

export { CartMain, CartHead, CartContentWrapper, CartData, ClearCartBtn, Wrapper, EmptyCart, CartWrapper }
import styled from "styled-components";

const OrdersWrapper = styled.div`
background-color: ${props => props.theme.colors.main};
min-height:100vh;
overflow-y: auto;
display: flex;
flex-direction: column;
justify-content: space-between;
@media only screen and (max-width: 600px)  {
    display: flex;
    flex-direction: column;
    }
@media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
    display: flex;
    flex-direction: column;
}
`

const OrdersMain = styled.div`
margin: 10px 0;
width: 100%;
height:100%;
`

const OrderHistory = styled.div`
margin: 10px 0;
height:auto;
display: flex;
align-items: center;
flex-direction: column;
`

const StatusWrapper = styled.div`
display: flex;
margin-bottom: 45px;
width: 300px;
@media only screen and (max-width: 600px)  {
    width: 400px;
}
@media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
    width: 400px;
}
`

const Image = styled.img`
height: 40px;
width: 40px;
`

const ImageChecked = styled.img`
height: 25px;
width: 25px;
`

const Label = styled.h6`
text-transform: capitalize;
color: ${props => props.fade ? "#C9C9C9" : "#000"}
`
const LabelDesc = styled.div`
margin-left: 10px;
display: flex;
flex-direction: column;
`

const Desc = styled.p`
color: ${props => props.fade ? "#C9C9C9" : "#000"};

`

const Status = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
`

const EmptyCartMapBtn = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
@media only screen and (max-width: 600px)  {
    flex-direction: column;
}
@media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
    flex-direction: column;
}
`

const Information = styled.div`
display: flex;
justify-content: space-evenly;
margin-bottom: 25px;
align-items: center;
padding-top: 6px;
background-color: ${props => props.theme.colors.accent};
color: #fff;
`

const EstTime = styled.div`
display: flex;
flex-direction: column;
`

const OrdNo = styled.div`
display: flex;
flex-direction: column;
`

const LableInfo = styled.h6`
text-transform: uppercase;
font-weight: 600px;
`

const DescInfo = styled.p``

const OrderDelivered = styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const StatusCheckWrapper = styled.div`
height: auto;
display: flex;
align-items: center;
justify-content: space-between;
width: 32%;
@media only screen and (max-width: 600px)  {
    width: 90%;
}
@media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
    width: 90%;
}
`

const Check = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 55px;
@media only screen and (max-width: 600px)  {
    margin-bottom: 55px;
}
@media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
    margin-bottom: 55px;
}
`

const OrderDetails = styled.div`
display: flex;
width: 600px;
flex-direction: column;
justify-content: space-evenly;
height: auto;
`

const OrderWrapper = styled.div`
height: auto;
display: flex;
flex-direction: row;
justify-content: space-evenly;
border-bottom: 1px solid #c9c9c9;
color:  ${props => props.theme.colors.text};
margin-bottom: 10vh;
 width: 100%;
@media only screen and (max-width: 600px)  {
   width: 90%;
}
@media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
   width: 90%;
}
`

const ButtonGroup = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 80px;
`

const Button = styled.button`
border: 1px solid ${props => props.theme.colors.accent};
border-radius: 5px;
height:5vh;
width:100px;
color:white;
font-weight: 500;
background-color: ${props => props.theme.colors.accent};
@media only screen and (max-width: 600px)  {
    width:80px;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 4px;
    }
@media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
    width:80px;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 4px;
}
`

const Item = styled.span`
font-weight: 400
`

const EmptyCart = styled.div`
width:90%;
margin:auto;
`

const OrderListContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background-color: rgba(0, 0, 0, 0.5);
 z-index: 1000;
 color: black;
`

export {
    OrdersWrapper, OrdersMain, OrderHistory, StatusWrapper, EmptyCart, EmptyCartMapBtn, Image, ImageChecked, Label, LabelDesc, Desc, Status, Information, EstTime, OrdNo, LableInfo, DescInfo, OrderDelivered, StatusCheckWrapper, Check, OrderDetails,
    OrderWrapper, Button, ButtonGroup, Item, OrderListContainer
}

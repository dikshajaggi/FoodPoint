import styled from "styled-components";

const OrdersWrapper = styled.div`
height: 100vh;

`

const OrdersMain = styled.div`
margin: 10px 0;
width: 100%;
height:100%;
`

const OrderHistory = styled.div`
margin: 10px 0;
width: 100%;
height:100%;
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
`
const StatusCheckWrapper = styled.div`
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
display: flex;
flex-direction: row;
justify-content: space-evenly;
border-bottom: 1px solid #c9c9c9;
margin-bottom: 10vh;
`

const ButtonGroup = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 60px;
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
    width:200px;
    font-weight: 400;
    margin-bottom: 4px;
    }
@media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
    width:200px;
    font-weight: 400;
    margin-bottom: 4px;
}
`

const Item = styled.span`
font-weight: 400
`

export {
    OrdersWrapper, OrdersMain, OrderHistory, StatusWrapper, Image, ImageChecked, Label, LabelDesc, Desc, Status, Information, EstTime, OrdNo, LableInfo, DescInfo, OrderDelivered, StatusCheckWrapper, Check, OrderDetails,
    OrderWrapper, Button, ButtonGroup, Item
}
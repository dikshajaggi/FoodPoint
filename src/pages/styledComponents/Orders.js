import styled from "styled-components";

const OrdersWrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const OrdersMain = styled.div`
margin: 10px 0;
width: 100%;
height:100%;
`

const StatusWrapper = styled.div`
display: flex;
margin-bottom: 45px;
width: 300px;
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
color: ${props => props.fade? "#C9C9C9" : "#000"};

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
width: 25%;
`

const Check = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 55px;
`

export {OrdersWrapper, OrdersMain, StatusWrapper, Image, ImageChecked, Label, LabelDesc, Desc, Status, Information, EstTime, OrdNo, LableInfo, DescInfo, OrderDelivered, StatusCheckWrapper, Check}
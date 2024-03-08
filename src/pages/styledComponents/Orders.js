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
`

const Image = styled.img`
height: 40px;
width: 40px;
`

const Label = styled.h6`
text-transform: capitalize;
`
const LabelDesc = styled.div`
margin-left: 10px;
display: flex;
flex-direction: column;
`

const Desc = styled.p`
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
`

const DescInfo = styled.p``

export {OrdersWrapper, OrdersMain, StatusWrapper, Image, Label, LabelDesc, Desc, Status, Information, EstTime, OrdNo, LableInfo, DescInfo}
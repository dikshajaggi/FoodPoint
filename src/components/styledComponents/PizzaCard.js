import styled from "styled-components";

const CardWrapper = styled.div`
height:25%;
width: 45%;
margin:4vh;
`

const InfoWrapper =  styled.div`
display: flex;
justify-content: space-evenly;
font-size: 20px;
font-weight: 400;
color: rgb(88, 86, 86);
border-bottom: 1px solid rgb(158, 155, 155);

`

const RestName = styled.h6`
margin-top:2vh;
text-align:center;
`

const RestInfo = styled.h6`
margin-top:2vh;
text-align:center;
`

export {CardWrapper, InfoWrapper, RestName, RestInfo }
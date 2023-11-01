import styled from "styled-components";

const CardWrapper = styled.div`
height:60vh;
width: 20vw;
display: flex;
flex-direction: column;
align-items: center;
flex: 0 0 25%;
box-sizing: border-box;
`

const Image = styled.img`
width:100%;
border-radius: 8px;
`

const InfoWrapper = styled.div`
display: flex;
width:100%;
justify-content: space-evenly;
font-size: 18px;
font-weight: 400;
color: rgb(88, 86, 86);
border-bottom: 1px solid rgb(158, 155, 155);
`

const RestName = styled.h6`
color: black;
margin-top:2vh;
text-align:center;
`

const RestInfo = styled.h6`
margin-top:2vh;
text-align:center;
font-size: 14px;
`

export { CardWrapper, InfoWrapper, RestName, RestInfo, Image }
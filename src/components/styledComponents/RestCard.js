import styled from "styled-components";

const CardWrapper = styled.div`
height:60vh;
width: 20vw;
display: flex;
flex-direction: column;
align-items: center;
flex: 0 0 25%;
box-sizing: border-box;
@media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
      height:30vh;
   width: 25vw;
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
   
}
@media only screen and (max-width: 600px)  {
       height:40vh;
       width: 55vw;
    }
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
import styled from "styled-components";

const CardWrapper = styled.div`
height:50vh;
width: 20vw;
display: flex;
flex-direction: column;
align-items: center;
flex: 0 0 25%;
color: white;
box-sizing: border-box;
@media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
      height:40vh;
      width: 25vw;
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    height:40vh;
   width: 25vw;
}
@media only screen and (max-width: 600px)  {
       height:40vh;
       width: 55vw;
    }
`

const Image = styled.div`
min-height: 120px; 
min-width: 220px;
border-radius: 10px;
background-image: ${props => `url(${require(`../../assets/rest_imgs/${props.image}`)})`};
background-size: cover; 
background-position: center;
@media only screen and (max-width: 600px)  {
   min-height: 120px; 
   min-width: 220px;
    }
@media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
   min-height: 120px; 
   min-width: 220px;
}
`

const InfoWrapper = styled.div`
display: flex;
width:100%;
justify-content: space-evenly;
font-size: 18px;
font-weight: 400;
color:  ${props => props.theme.colors.text};
border-bottom: 1px solid rgb(158, 155, 155);
`

const RestName = styled.h6`
color: white;
margin-top:2vh;
text-align:center;
`

const RestInfo = styled.h6`
margin-top:2vh;
text-align:center;
font-size: 14px;
`

export { CardWrapper, InfoWrapper, RestName, RestInfo, Image }
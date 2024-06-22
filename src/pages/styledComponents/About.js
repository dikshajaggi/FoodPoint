import styled from "styled-components";

const AboutWrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color:  ${props => props.theme.colors.main};

`
const AboutMain = styled.div`
width: 100%;
height:100%;
background-color:  ${props => props.theme.colors.main};

`
const AboutDesc = styled.div`
text-align: ${props => props.part === "center" ? "center" : "justify"};
margin: ${props => props.part === "center" ? "0 4vw" : "0 2vw;"};
margin-bottom: 4vh;
color: ${props => props.theme.colors.text};
display: flex;
flex-wrap: wrap;
font-size: 18px;
align-items: center;
justify-content: space-evenly;
`

const Strong = styled.h4`
font-size: 18px;
`

const Flex = styled.div`
margin: 18px 4px;
border: none;
border-radius: 5px;
display: flex;
height: 28vh;
width:22vw;
padding: 2vh;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
background-color: white;
color: black;
    @media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
     width:70vw;

}
 @media only screen and (max-width: 600px)  {
   width:70vw;

 }
`
const Wrapper = styled.div`
margin: 6vh 0;
padding: 8vh 0;
display: flex;
align-items: ${props => props.part === "commitment" ? "center" : "none"};
height: ${props => props.part === "commitment" ? "60vh" : props.section === "first" ? "90vh" : "40vh"};
flex-direction: column;
justify-content: space-evenly;
background-color:  ${props => props.theme.colors.main};
color: ${props => props.theme.colors.text};
padding: 0 1vw;
 @media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
    height: auto;
    align-items: ${props => props.part === "commitment" ? "center" : "center"};
    justify-content: center;
}
 @media only screen and (max-width: 600px)  {
    height: auto;
    align-items: ${props => props.part === "commitment" ? "center" : "center"};
    justify-content: center;
 }
`

const ImgWrapper = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
color: ${props => props.theme.colors.text};
background-color:  ${props => props.theme.colors.main};
 @media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
   flex-direction: column-reverse;
}
 @media only screen and (max-width: 600px)  {
   flex-direction: column-reverse;
 }
`

const FoodImg = styled.img`

`

const Params = styled.div`
display:flex;
flex-direction: row;
width:100%;
justify-content: space-evenly;
    @media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
      flex-direction: column;
      align-items: center;
};
 @media only screen and (max-width: 600px)  {
    flex-direction: column;
    align-items: center;
 }
`

const AboutHeading = styled.h4`
margin: ${props => props.main === "main" ? "0 2vw 8vh 2vw" : "0 2vw 4vh 2vw"};
font-size: 30px;
color: white;
`

const Images = styled.div`
display:flex;
align-items:center;
justify-content: space-around;
margin: ${props => props.section === "first" ? "0" : "8vh 0"};
 @media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
    display:none;
}
 @media only screen and (max-width: 600px)  {
    display:none;
 }
`

export { AboutWrapper, FoodImg, AboutDesc, AboutHeading, AboutMain, Strong, Flex, Wrapper, Params, ImgWrapper, Images }
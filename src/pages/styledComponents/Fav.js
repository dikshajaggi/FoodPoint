import styled from "styled-components";

const FavWrapper = styled.div`
height:100vh;
margin: 2vh 2vw;
background-color: ${props => props.theme.colors.main};
`

const FavHeading = styled.h4`
text-align: center;
margin: 6vh 0;
color: white;
font-size: ${props => props.size === "small" ? "16px" : "18px"};
`
const ImgWrapper = styled.div`
margin-top: 10vh;
display: flex;
flex-direction:column;
justify-content:space-evenly;
align-items: center;
`

const Img = styled.img`
width: 40%;
`

const DispCards = styled.div`
display: flex;
flex-direction:row;
justify-content: space-evenly;
width: 90%;
`

export { FavWrapper, FavHeading, ImgWrapper, Img, DispCards }
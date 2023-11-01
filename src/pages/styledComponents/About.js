import styled from "styled-components";

const AboutWrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const AboutMain = styled.div`
margin: 10px 0;
width: 100%;
height:100%;
`
const AboutDesc = styled.div`
text-align: ${props => props.part === "commitment" ? "center" :  "justify"};
margin: ${props => props.part === "commitment" ? "0 4vw" :  "0 2vw;"};
margin-bottom: 4vh;
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
height: 22vh;
width:22vw;
padding: 2vh;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
background-color: white;
color: black;
`
const Commitment =  styled.div`
margin: 6vh 0;
padding: 8vh 0;
display: flex;
align-items: center;
height: 60vh;
flex-direction: column;
justify-content: space-evenly;
background-color: #94499c;
color: white;
padding: 0 1vw;
`

const Params = styled.div`
display:flex;
flex-direction: row;
width:100%;
justify-content: space-evenly;
`

const AboutHeading = styled.h4`
margin: ${props => props.main === "main" ? "0 2vw 8vh 2vw" : "0 2vw 4vh 2vw"};
font-size: 30px;
`

export { AboutWrapper, AboutDesc, AboutHeading, AboutMain, Strong, Flex, Commitment,Params }
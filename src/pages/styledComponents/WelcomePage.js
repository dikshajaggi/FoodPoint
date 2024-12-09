import styled from "styled-components";

const Wrapper = styled.div`
diplay:flex;
flex-direction: column;
height:auto;
width: 100%;
align-items: center;
`

const Main = styled.div`
display: flex;
`
const Content = styled.div`
display:flex;
flex-direction: column;
width: 60vw;
margin: 10vh;
 @media screen and (max-width: 1024px) {
    overflow-x: hidden;
    overflow-y: hidden;
  }
`

const Image = styled.img`
width:38%;
     @media only screen and (max-width: 600px)  {
       display: none;
    }
    @media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
       display: none;
    }
    @media screen and (max-width: 1024px) {
      display: none;
    }
`

const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
@media screen and (max-width: 768px) {
  flex-direction: column;
}
`
const LoginSignup = styled.div`
display: flex;
width: 16vw;
justify-content: space-evenly;
 @media screen and (max-width: 1024px) {
  width: 100%;
 }
`
const Button = styled.button`
border: none;
height: 6vh;
width: 8vw;
background-color: ${props => props.type === "login" ? "transparent" : "black"};
color: ${props => props.type === "login" ? "black" : "white"};
font-weight: 600;
 @media screen and (max-width: 1024px) {
  width: 20vw;
 }
`

const Body = styled.div`
display: flex;
flex-direction: column;
`

const WelcomeText = styled.div`
display: flex;
flex-direction: column;
margin-top: 8vh;
color: white;
`

const LocationInput = styled.div`
display: flex;
margin-top: 6vh;
align-items: center;
background-color: ${props => props.type === "error" ? "#fa4a5b" : "transparent"};
height: 6vh;
width: ${props => props.type === "error" ? "50vw" : "none"};
padding-left: ${props => props.type === "error" ? "1vw" : "none"};
color:${props => props.type === "error" ? "white" : "none"};
margin-top: ${props => props.type === "error" ? "2px" : "none"};
`

const SubHead = styled.p`
font-size: 24px;
margin-top: 1vh;
color: #686b78;
`

const Head = styled.h1`
font-weight: 600;
font-size: 40px;
`

const LocateUser = styled.button`
border: none;
height: 6vh;
width: auto;
font-size: 16px;
background-color: transparent;
 @media screen and (max-width: 1024px) {
  font-size: 10px;
 }
`

const FindFood = styled.button`
border: none;
background-color: ${props => props.theme.colors.accent};
height: 6.2vh;
width: 8vw;
color: white;
font-weight: 500;
 @media screen and (max-width: 1024px) {
 width: 8vw;
height: 3.2vh;
font-size: 8px;
  }
`
const LocWrapper = styled.div`
display: flex;
width: ${props => props.component === "drawer" ? "26vw" : "20%"};
justify-content: space-evenly;
align-items: center;
border: 1px solid black;
background-color: white;
margin: ${props => props.component === "drawer" ? "10vh 2vw 2vh 2vw" : "0"};
   @media only screen and (max-width: 600px)  {
        width:  ${props => props.component === "drawer" ? "26vw" : "60%"}
    }
    @media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
        width:  ${props => props.component === "drawer" ? "26vw" : "60%"}
`
const Address = styled.input`
border: none;
width: 36vw;
height: 6vh;
padding-left: 1vw;
&:focus {
    outline: none;
  }
   @media screen and (max-width: 1024px) {
  width: 26vw;
 }
`
export { Wrapper, Main, Content, Image, Header, LoginSignup, Button, Body, WelcomeText, LocationInput, SubHead, Head, LocateUser, FindFood, LocWrapper, Address }
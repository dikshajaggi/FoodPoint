import styled from "styled-components";

const Wrapper = styled.div`
diplay:flex;
flex-direction: column;
`

const Main = styled.div`
display: flex;`

const Content = styled.div`
display:flex;
flex-direction: column;
width: 60%;
margin: 10vh;
`

const Image = styled.img`
width:40%;
`

const Header = styled.div`
display: flex;
justify-content: space-between;
`
const LoginSignup = styled.div`
display: flex;
width: 16vw;
justify-content: space-evenly;
`
const Button = styled.button`
border: none;
height: 6vh;
width: 8vw;
background-color: ${props => props.type === "login" ? "transparent": "black"};
color: ${props => props.type === "login" ? "black": "white"};
font-weight: 600;
`

const Body = styled.div`
display: flex;
flex-direction: column;
`

const WelcomeText = styled.div`
display: flex;
flex-direction: column;
margin-top: 8vh;
`

const LocationInput = styled.div`
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

export {Wrapper, Main, Content, Image, Header, LoginSignup, Button, Body, WelcomeText, LocationInput, SubHead, Head}
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
width:38%;
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
display: flex;
margin-top: 6vh;
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
width: 6vw;
background-color: transparent;
`

const FindFood = styled.button`
border: none;
background-color: ${props => props.theme.colors.accent};
height: 6.2vh;
width: 8vw;
margin-left: 0.5vw;
color: white;
font-weight: 500;
`
const LocWrapper = styled.div`
display: flex;
width:42vw;
justify-content: space-evenly;
border: 1px solid black;
`
const Address = styled.input`
border: none;
width: 36vw;
height: 6vh;
padding-left: 1vw;
`
export {Wrapper, Main, Content, Image, Header, LoginSignup, Button, Body, WelcomeText, LocationInput, SubHead, Head, LocateUser, FindFood, LocWrapper, Address}
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignUpWrapper = styled.div`
height:auto;
width:30%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
border-radius: 8px;
border: 2px solid ${props => props.theme.colors.accent};
`
const SignupButton = styled.button`
margin-top: 6vh;
width:24.5vw;
height:5vh;
text-transform: uppercase;
font-size: 16px;
border: none;
border-radius: 5px;
color:white;
background-color:${props => props.theme.colors.accent};
`

export { SignUpWrapper, SignupButton }

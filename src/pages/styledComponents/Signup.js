import { Link } from "react-router-dom";
import styled from "styled-components";

const SignUpWrapper = styled.div`
height:auto;
width:30%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
background-color: ${props => props.theme.colors.primary};
`
const SignupButton = styled.button`
width:24.5vw;
height:5vh;
text-transform: uppercase;
font-size: 16px;
`

export { SignUpWrapper, SignupButton }

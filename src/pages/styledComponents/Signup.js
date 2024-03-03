import styled from "styled-components";

const SignUpWrapper = styled.div`
height:auto;
width:80%;
display: flex;
border-radius: 8px;
flex-direction: column;
align-items: center;
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

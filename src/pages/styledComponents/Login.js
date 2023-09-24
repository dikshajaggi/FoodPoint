import styled from "styled-components"

const LoginWrapper = styled.div`
height:auto;
width:30%;
display: flex;
flex-direction: column;
align-items: center;
background-color: ${props => props.theme.colors.primary};
`
const LoginButton = styled.button`
width:24.5vw;
height:5vh;
text-transform: uppercase;
font-size: 16px;
`

export { LoginWrapper, LoginButton }
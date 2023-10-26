import styled from "styled-components"

const LoginWrapper = styled.div`
height:50%;
width:30%;
display: flex;
border-radius: 8px;
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
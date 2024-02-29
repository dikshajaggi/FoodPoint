import styled from "styled-components"

const LoginWrapper = styled.div`
height:auto;
width:80%;
display: flex;
border-radius: 8px;
flex-direction: column;
align-items: center;
@media only screen and (max-width: 600px)  {
    justify-content: center;
}

`

const ImageWrapper = styled.div`
  height:100%;
  width: 50%;

    @media only screen and (max-width: 600px) {
        display: none;
    }
`
const LoginButton = styled.button`
margin-top: 6vh;
width:24.5vw;
height:5vh;
border: none;
border-radius: 5px;
color:white;
background-color:${props => props.theme.colors.accent};
text-transform: uppercase;
font-size: 16px;
`

export { LoginWrapper, LoginButton, ImageWrapper }
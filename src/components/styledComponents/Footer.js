import styled from "styled-components"

const FooterWrapper = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:24vh;
color:white;
font-weight:500px;
background-color: ${props => props.theme.colors.accent};
`
const Info = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
height:80%;
width:100%;
`

const Copyright = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:20%;
width:100%;
background-color: #f58a2c`


const LinksWrapper = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
height:100%;
width:60%;
`

const Logo = styled.span`
display:flex;
justify-content: center;
align-items:center;
font-weight:500;
font-size:22px;
color:white;
`

export { FooterWrapper, Info, Copyright, LinksWrapper, Logo }
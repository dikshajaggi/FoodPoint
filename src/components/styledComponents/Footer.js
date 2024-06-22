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
background-color: ${props => props.theme.colors.header};
position: static;
bottom: 0;
`
const Info = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
height:80%;
width:100%;
      @media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
     flex-direction: row;
}
`

const Copyright = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:20%;
width:100%;
background-color:  ${props => props.theme.colors.header};
@media only screen and (max-width: 600px)  {
  font-size: 14px;
    }
    @media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
      font-size: 14px;
}
`


const LinksWrapper = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
height:100%;
width:60%;
 @media screen and (max-width: 1024px) {
   flex-direction: column;
  }
`

const Logo = styled.span`
display:flex;
justify-content: center;
align-items:center;
font-weight:500;
font-size:22px;
color:white;
@media only screen and (max-width: 600px)  {
  font-size: 16px;
    }
     @media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
      font-size: 16px;
}
`

export { FooterWrapper, Info, Copyright, LinksWrapper, Logo }
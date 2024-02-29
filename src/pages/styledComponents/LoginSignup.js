import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderOnlyLayoutWrapper = styled.div`
height:100vh;
scroll:auto;
display:flex;
justify-content:space-between;
align-items:center;
@media only screen and (max-width: 600px)  {
   justify-content:center;
}
`

const CenterDiv = styled.div`
width: 100%;
margin:auto;
display:flex;
justify-content:center;
align-items:center
`

const ErrorPara = styled.p`
color: ${props => props.theme.colors.danger};
font-size: 14px;
font:${props => props.theme.fonts.normal_text};
`

const Label = styled.p`
font-size: 16px;
font:${props => props.theme.fonts.prdouct_name_desc};
color: ${props => props.theme.colors.accent}
`

const LinkWrapper = styled(Link)`
text-decoration:none;
color: ${props => props.theme.colors.accent}
`
const LabelInputWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin-bottom: 6%;
`

const Input = styled.input`
width:24vw;
height:5vh;
border:none;
border:1px solid #a6a6a6;
padding: 0 4px;
@media only screen and (max-width: 600px)  {
    width:60vw;
}
`

const Heading = styled.h4`
font-size:24px;
text-transform: uppercase;
font: ${(props) => props.theme.fonts.headings_sub_headings};
color: ${props => props.theme.colors.accent};
margin-bottom: ${props => props.heading === "login" ? "6vh" : "2vh"} ;
margin-top: ${props => props.heading === "login" ? "2vh" : "2vh"};

`
export { HeaderOnlyLayoutWrapper, ErrorPara, Label, LinkWrapper, LabelInputWrapper, Input, Heading, CenterDiv }
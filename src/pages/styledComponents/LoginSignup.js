import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderOnlyLayoutWrapper = styled.div`
background-color:${(props) => props.theme.colors.secondary};
height:100vh;
scroll:auto;
display:flex;
flex-direction:column;
`

const CenterDiv = styled.div`
width: 100%;
margin:auto;
display:flex;
justify-content:center;
align-items:center
`

const ErrorPara = styled.p`
color: ${props => props.theme.colors.secondary};
font-size: 14px;
font:${props => props.theme.fonts.normal_text};
`

const Label = styled.p`
font-size: 16px;
font:${props => props.theme.fonts.prdouct_name_desc};
color: ${props => props.theme.colors.secondary}
`

const LinkWrapper = styled(Link)`
text-decoration:none;
color: ${props => props.theme.colors.secondary}
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
`

const Heading = styled.h4`
font-size:24px;
text-transform: uppercase;
font: ${(props) => props.theme.fonts.headings_sub_headings};
color: ${props => props.theme.colors.secondary};

`
export { HeaderOnlyLayoutWrapper, ErrorPara, Label, LinkWrapper, LabelInputWrapper, Input, Heading, CenterDiv }
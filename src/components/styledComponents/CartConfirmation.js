import styled from "styled-components";

const Content = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 2vh;
`

const Heading = styled.h4`
font-size: 24px;
`

const Label = styled.h6`
font-weight: 400;
`

const ButtonWrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`

const Button = styled.div`
width: 15vw;
height: 6vh;
display:flex;
font-weight: 500;
justify-content: center;
align-items: center;
cursor: pointer;
border: ${props => props.type === "start" ? null : "2px solid #60b246"};
background-color: ${props => props.type === "start" ? "#60b246" : null};
color: ${props => props.type === "start" ? "white" : null}
`

export { Content, Heading, Label, ButtonWrapper, Button }
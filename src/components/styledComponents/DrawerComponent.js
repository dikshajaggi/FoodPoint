import styled from "styled-components";


const LocateUserBtn = styled.div`
background-color: #4C4C4C;
color: ${props => props.theme.colors.text};
display:flex;
width: 26vw;
padding-left: 1vw;
justify-content: space-around;
flex-direction: column;
border: 1px solid #a6a6a6;
height: 10vh;
margin: 10vh auto;
font-size: 18px;
cursor: pointer;
`
export { LocateUserBtn }
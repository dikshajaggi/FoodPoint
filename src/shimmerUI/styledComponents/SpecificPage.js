import styled from "styled-components"

const Title = styled.div`
background-color: #e1dfdf;
height: 6vh;
width: 16vw;
margin-bottom: 2vh;
margin-top: ${props => props.menu === "menu" ? "6vh" : ""}
`

const Label = styled.span`
background-color: #e1dfdf;
height: 4vh;
width: 5vw;
margin-bottom: 2vh;
`

const Info = styled.div`
display: flex;
width:16vw;
justify-content: space-evenly;
`

const HeadTitle = styled.div`
background-color: #e1dfdf;
height: 6vh;
width: 10vw;
margin-bottom: 2vh;
`
export { Title, Label, Info, HeadTitle }
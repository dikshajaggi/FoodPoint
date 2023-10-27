import styled from "styled-components"

const RestCardWrapper = styled.div`
height:auto;
width: 44vh;
margin: 4vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
`

const Image = styled.div`
background-color: #e1dfdf;
height:20vh;
width: 44vh;
`

const RestName = styled.div`
margin: 2vh 0;
background-color: #e1dfdf;
height: 2vh;
width:15vh;
`

const Info = styled.div`
display: flex;
justify-content: space-evenly;
`

const Label = styled.div`
background-color: #e1dfdf;
height: 2vh;
margin: 0 1vw;
width:10vh;
`

const Offer = styled.div`
margin: 2vh 0;
background-color: #e1dfdf;
height: 2vh;
width:24vh;
`

export { RestCardWrapper, Image, RestName, Info, Label, Offer }
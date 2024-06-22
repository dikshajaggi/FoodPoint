import styled from "styled-components"

const RestCardWrapper = styled.div`
height:50vh;
width: 20vw;
display: flex;
flex-direction: column;
align-items: center;
flex: 0 0 25%;
color: white;
box-sizing: border-box;
@media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
      height:40vh;
      width: 25vw;
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    height:40vh;
   width: 25vw;
}
@media only screen and (max-width: 600px)  {
       height:40vh;
       width: 55vw;
    }
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
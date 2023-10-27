import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height:auto;
    background-color: transparent;
    display: flex;
    align-items: center;
    margin-bottom: 4vh;
`

const DataCard = styled.div`
    background-color: transparent;
    padding: 0;
    width: 100%;
    height:auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const DishName = styled.span`
background-color: #e1dfdf;
height: 4vh;
width: 12vw;
margin-bottom: 2vh;
`

const Label = styled.span`
background-color: #e1dfdf;
height: 4vh;
width: 5vw;
margin-bottom: 2vh;
`

const Price = styled.span`
background-color: #e1dfdf;
height: 4vh;
width: 5vw;
margin-bottom: 2vh;
`

const Button = styled.div`
background-color: #e1dfdf;
height: 6vh;
width: 5vw;
`

const Description = styled.div`
background-color: #e1dfdf;
height: 6vh;
width: 50vw;
`

export { Wrapper, DataCard, DishName, Price, Label, Button, Description }
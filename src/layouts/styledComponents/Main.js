import styled from "styled-components"

const MainWrapper = styled.div`
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
height:100%;
width:100%;
`

const CardWrapper = styled.div`
width:100%;
padding: 0 4vw;
margin-top: 4vh;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

export { MainWrapper, CardWrapper }
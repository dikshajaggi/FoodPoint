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
margin-top: 20px;
display: grid;
gap: 20px 100px;
grid-template-columns: auto auto auto;
`

export { MainWrapper, CardWrapper }
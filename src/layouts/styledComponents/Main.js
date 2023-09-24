import styled from "styled-components"

const MainWrapper = styled.div`
background-color: ${props => props.theme.colors.primary};
display: flex;
flex-direction: column;
align-items: center;
height:100%;
width:100%;
`

const CardWrapper = styled.div`
flex-wrap: wrap;
margin-top: 20px;
display: flex;
justify-content: space-between;
align-items: center;
`

export { MainWrapper, CardWrapper }
import styled from "styled-components";

const SpecificWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex:1;
    background-color:  ${props => props.theme.colors.main};
    color: #d0d0d0;
`

const SpecificCardStyle = styled.div`
margin: 10%;
width: 80%;
`

const SpecificHeading = styled.h2`
    font-size: 20px;
    margin-bottom: 2vh;
`

const SpecificCardSubHeading = styled.h2`
    font-weight: 600;
    font-size: 14px;
    color: #a6a6a6;
`
const MenuHeading = styled.h4`
    margin-top: 10vh;
    font-size: 22px;
    color: white;
`
const MenuCategory = styled.h4`
    font-size: 20px;
    margin: 4vh 0;
    font-weight: 600;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const AllMenuCards = styled.div``

const HeaderDiv = styled.div`
display:flex;
justify-content: space-between
`

const HeaderLeft = styled.div`
display:flex;
flex-direction: column;
`

const HeaderRight = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`

export { SpecificWrapper, SpecificCardStyle, AllMenuCards, SpecificHeading, SpecificCardSubHeading, MenuHeading, MenuCategory, HeaderDiv, HeaderLeft, HeaderRight }
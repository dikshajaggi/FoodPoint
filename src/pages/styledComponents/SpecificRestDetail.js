import styled from "styled-components";

const SpecificWrapper = styled.div`
margin: 10px;
    display: flex;
    flex-direction: column;
`

const SpecificCardStyle= styled.div`
margin: 20px;
    width: 900px;
`

const SpecificHeading = styled.h2`
font-size: 30px;
    margin-bottom: 2vh;
`

const SpecificCardSubHeading = styled.h2`
font-weight: 600;
    font-size: 22px;
`
const MenuHeading = styled.h4`
margin-top: 10vh;
    font-size: 30px;
    color: rgb(112, 112, 112);
`
const MenuCategory = styled.h4`
ont-size: 30px;
    margin: 4vh 0;
    font-weight: 600;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const AllMenuCards = styled.div``

export {SpecificWrapper, SpecificCardStyle, AllMenuCards, SpecificHeading, SpecificCardSubHeading, MenuHeading, MenuCategory}
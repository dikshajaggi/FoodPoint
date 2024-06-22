import styled from "styled-components";

export const Main = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;
`

export const SearchWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Input  = styled.input`
    margin-top: 2vh;
    height: 50px;
    width: 70%;
    border-radius: 10px;
    border-color: transparent;
    padding: 0 6px;
`

export const Results = styled.div`
width: 60%;
`

export const ResultsDisplay = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`

export const RecentDishes = styled.div`
display: flex;
width: 70%;
color: white;
flex-direction: column;
margin-top: 10px;
`

export const SearchCard = styled.div`
display: flex;
align-items: center;
cursor: pointer;
`
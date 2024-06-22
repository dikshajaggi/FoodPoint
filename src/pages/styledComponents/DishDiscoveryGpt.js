import styled from "styled-components";

const Wrapper = styled.div`
width: 100%;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const MainContainer = styled.div`
display:flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
min-height: 80vh;
overflow-y: auto;
`

const SearchArea = styled.div`
display: flex;
align-items: center;
`

const Prompt = styled.input`
width: 700px;
border: 1px solid grey;
border-radius: 10px;
height: 50px;
padding: 0 10px;
margin-top: 12px;
`

const ResultArea = styled.div`
width: 80%;
color: white;
margin-top: 20px;
`

const Heading = styled.h4`
color: white;
`

const SubHead = styled.h6`
color: white;
`

const HeadingWrapper = styled.div`
margin-top: 20px;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const SampleQueries = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
width: auto;
`

const QueryCard = styled.div`
height: 100px;
width: 270px;
margin-right: 10px;
display: flex;
align-items: center;
justify-content: center;
font-size: 16px;
border-radius: 10px;
border: ${props => `1px solid ${props.theme.colors.text}`} ;
color: white;
cursor: pointer;
`

export { Wrapper, MainContainer, SearchArea, ResultArea, Prompt, Heading, SubHead, HeadingWrapper, SampleQueries, QueryCard}
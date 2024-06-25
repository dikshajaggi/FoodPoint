import styled from "styled-components";

const Wrapper = styled.div`
margin-top: 14px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
color: #fff;
background-color: ${props => props.theme.colors.accent};
`

const Tab = styled.div`
border-right: ${props => props.tab === "1" ? "2px solid #fff" : null} ;
width: 50%;
display: flex;
align-items: center;
justify-content: center;
height: 100%;
cursor: pointer;
`

export { Wrapper, Tab }
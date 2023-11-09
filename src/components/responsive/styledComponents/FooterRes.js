import styled from "styled-components";

const Wrapper = styled.div`
display:flex:
flex-direction: row;
align-items:center;
width: 100%;
height: 24vh;
background-color: ${props => props.theme.colors.accent};
`

const Filters = styled.div`
width:auto;
display: flex;
color: white;
`

const Account = styled.div`
width:auto;
display: flex;
color: white;
`

export {Wrapper, Filters, Account}
import styled from "styled-components"

const PPWrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color:  ${props => props.theme.colors.main};
`

const PrivacyWrapper = styled.div`
padding: 10vh;
color: ${props => props.theme.colors.text}
`

const TncWrapper = styled.div`
padding: 10vh;
`
const Wrapper = styled.div`
padding: 10vh;
`
const Heading = styled.h4`
font-size: 30px;
padding-top: 10px;
color: white;
`

const MainTncWrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color:  ${props => props.theme.colors.main};
color: ${props => props.theme.colors.text};
`

const MainDisclaimerWrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color:  ${props => props.theme.colors.main};
color: ${props => props.theme.colors.text};
`


export { PPWrapper, PrivacyWrapper, Heading, TncWrapper, MainTncWrapper, MainDisclaimerWrapper, Wrapper }
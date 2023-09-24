import { Link } from "react-router-dom"
import styled from "styled-components"

const HeaderWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width:96vw;
`

const Categories = styled.div`
display:${props => props.display === "subHeader" ? "flex" : "none"};
justify-content: center;
align-items:center;
`

const CategoryLabel = styled.h4`
display: ${props => props.display === "subHeader" ? "flex" : "none"};
text-transform: capitalize;
`

const NavbarUL = styled.ul`
display: flex;
justify-content: space-evenly;
list-style-type: none;
`

const NavbarLI = styled.li`
font-size: ${props => props.header === "main" ? "18px" : "14px"};
font-weight: 500;
`

const LinkStyled = styled(Link)`
text-decoration: none;
`
export { HeaderWrapper, Categories, CategoryLabel, NavbarUL, NavbarLI, LinkStyled }
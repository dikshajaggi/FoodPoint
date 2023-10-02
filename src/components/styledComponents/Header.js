import { Link } from "react-router-dom"
import styled from "styled-components"

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
    border-bottom: 1px solid rgb(158, 155, 155);
`

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

const SearchCartWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 700px;
    align-items: center;
`

const SearchWrapper = styled.div`
 display: flex;
`

const CartWrapper = styled.div` 
    width: 300px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const UserInfo = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const Avatar = styled.button``
const Username = styled.h3`
    text-transform: capitalize;
    font-weight: 600;
`
const UserDropdown = styled.div`
 display: none;
`

const CartItemsLength = styled.span`
margin-left: 4px;
font-size: 12px;
`

const LoginUser = styled.div`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
width: 300px;
height: 35px;
`

export { HeaderDiv, HeaderWrapper, Categories, CategoryLabel, NavbarUL, NavbarLI, LinkStyled, SearchCartWrapper, SearchWrapper, CartWrapper, UserInfo, Avatar, Username, UserDropdown, CartItemsLength, LoginUser, Input }
import { Link } from "react-router-dom"
import styled from "styled-components"

const HeaderDiv = styled.div`
display: flex;
flex-direction: column;
`

const HeaderWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
width:96vw;
`

const Categories = styled.div`
margin-top:4vh;
display:${props => props.display === "subHeader" ? "flex" : "none"};
justify-content: space-evenly;
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
width:100%;
`

const NavbarLI = styled.li`
font-size: ${props => props.header === "main" ? "18px" : "14px"};
font-weight: 500;
`

const LinkStyled = styled(Link)`
text-decoration: none;
color: black;
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
const UserDropdown = styled.div`
position:absolute;
 display: none;
 margin-top:8vh;
 width:16vw;
 background-color:yellow; 
 text-align:center;
`
const Avatar = styled.button``
const Username = styled.div`
position:relative;
display: flex;
flex-direction: column;
height:8vh;
justify-content: space-evenly;
`
const Account = styled.button`
    margin-top:-2vh;
    background-color:transparent;
    border: none;
    text-transform: capitalize;
    font-weight: 400;
    text-align:left;
`

const Name = styled.h6`
    text-transform: capitalize;
    font-weight: 600;
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

const SearchValWrapper = styled.div`
display:flex;
justify-content: space-evenly;
align-items:center;
background-color: yellow;
cursor:pointer;
`
const SearchListVal = styled.li`
list-style-type: none;
font-weight: 500;
`

const SearchValImg = styled.img`
height:10%;
width:10%;
border-radius: 6px;

`

export { HeaderDiv, HeaderWrapper, Categories, CategoryLabel, NavbarUL, NavbarLI, LinkStyled, SearchCartWrapper, SearchWrapper, CartWrapper, UserInfo, Avatar, Username, UserDropdown, CartItemsLength, LoginUser, Input, Name, Account, SearchListVal, SearchValWrapper, SearchValImg }
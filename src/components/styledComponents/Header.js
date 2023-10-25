import { Link } from "react-router-dom"
import styled from "styled-components"

const HeaderDiv = styled.div`
display: flex;
flex-direction: column;
width:100%;
`

const HeaderWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width:100%;
height:10vh;
`

const Categories = styled.div`
margin:4vh 0;
display:${props => props.display === "subHeader" ? "flex" : "none"};
justify-content: space-evenly;
align-items:center;
position: relative;
z-index: 1;
`

const CategoryLabel = styled.h4`
margin-top: 2vw;
margin-left: 2vw;
display: ${props => props.display === "subHeader" ? "flex" : "none"};
text-transform: capitalize;
`
const NavWrapper = styled.div`
display: flex;
flex: 1;
align-items: center;
flex-direction: row;
justify-content: center;
`
const NavbarUL = styled.ul`
margin:auto;
width:100%;
list-style-type: none;
display:flex;
align-items: center;
justify-content: space-evenly;

`

const NavbarLI = styled.li`
font-size: ${props => props.header === "main" ? "16px" : "14px"};
font-weight: 400;
`

const LinkStyled = styled(Link)`
text-decoration: none;
color: black;
`

const SearchCartWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex: 1;
    align-items: center;
`

const SearchWrapper = styled.div`
 display: flex;
 width: 60%;
`

const SearchBtn = styled.button`
background-color:transparent;
border: none;
`

const CartWrapper = styled.div` 
    width: 300px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const UserInfo = styled.div`
    width: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const UserDropdown = styled.div`
position:absolute;
 display: none;
 margin-top:8vh;
 width:10%;
 text-align:center;
`
const Avatar = styled.button`
width: auto;
background-color: transparent;
border: none;
`
const Username = styled.div`
position:relative;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`
const Account = styled.button`
    margin-top:-2vh;
    background-color:transparent;
    border: none;
    text-transform: capitalize;
    font-weight: 400;
    font-size: 12px;
    text-align:left;
`

const Name = styled.h6`
    text-transform: capitalize;
    font-weight: 500;
    font-size: 14px;
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
background-color:transparent;
border: none;
border-bottom: 1px solid black;
width: 100%;
font-size: 14px;
&:focus {
    outline: none; 
    border-bottom:2px solid ${props => props.theme.colors.accent};
  }

`

const SearchValWrapper = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
cursor:pointer;
padding:1vh;
height:auto;
`
const SearchListVal = styled.li`
list-style-type: none;
font-weight: 500;
font-size:14px;
`

const SearchValImg = styled.img`
height:40%;
width:40%;
border-radius: 6px;
`

const SearchBarList = styled.div`
display:flex;
background-color: white;
margin-left: 65%;
margin-top:4%;
width:25%;
border: 3px solid ${props => props.theme.colors.accent};
border-radius: 10px;
position: absolute;
z-index:2;
`

const Logo = styled.span`
display:flex;
justify-content: center;
align-items:center;
flex: 1;
font-weight:500;
font-size:22px;
color:${props => props.theme.colors.accent}
`

const NavbarULCat = styled.div`
display: flex;
justify-content: space-evenly;
list-style-type: none;
width:100%;
`

export { HeaderDiv, HeaderWrapper, Categories, CategoryLabel, NavWrapper, NavbarUL, NavbarLI, LinkStyled, SearchCartWrapper, SearchWrapper, SearchBarList, CartWrapper, UserInfo, Avatar, Username, UserDropdown, CartItemsLength, LoginUser, Input, Name, Account, SearchListVal, SearchValWrapper, SearchValImg, Logo, SearchBtn, NavbarULCat }
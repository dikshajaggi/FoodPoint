import { Link } from "react-router-dom"
import styled from "styled-components"

const HeaderDiv = styled.div`
display: flex;
flex-direction: column;
width:100%;
position: sticky;
top: 0;
z-index: 2;
background-color: white;
`

const HeaderWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width:100%;
height:10vh;
box-shadow: 3px 9px 26px -4px #eeeeee;

`

const Categories = styled.div`
margin-bottom:4vh;
display:${props => props.display === "subHeader" ? "flex" : "none"};
justify-content: space-evenly;
align-items:center;
position: relative;
z-index: 1;
height:6vh;
background-color: ${props => props.theme.colors.accent}

`

const CategoryLabel = styled.h4`
margin-left: 2vw;
background-color: transparent;
display: ${props => props.display === "subHeader" ? "flex" : "none"};
text-transform: capitalize;
box-shadow: 3px 9px 26px -4px #eeeeee;

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
font-size: ${props => props.header === "main" ? "18px" : "16px"};
font-weight: 400;
`

const LinkStyled = styled(Link)`
text-decoration: none;
color: black;
font-size: ${props => props.option === "fav" ? "14px" : "16px"};
font-weight : ${props => props.option === "fav" ? "400" : "400"};
`

const LogoutBtn = styled.span`
font-size: 14px;
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
 margin-right: -2vw;
`

const SearchBtn = styled.button`
background-color:transparent;
border: none;
position: absolute;
right: 14vw;
`

const CartWrapper = styled.div` 
    width: 240px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const UserInfo = styled.div`
    width: 8vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const UserDropdown = styled.div`
display:flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;
position:absolute;
box-shadow: -2px 5px 26px -1px rgba(191,184,184,1);
 width:8vw;
 height: 10vh;
 margin-top: 20vh;
 right:-6px;
 padding:1vh;
 z-index: 2;
 background-color:white;
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

const Profile = styled.button`
    margin-top: -1vh;
    background-color:transparent;
    border: none;
    height:auto;
    text-transform: capitalize;
    font-weight: 400;
    font-size: 14px;
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
border: 1px solid #a6a6a6;
width: 20vw;
height: 4vh;
font-size: 14px;
&:focus {
    outline: none; 
  }

`

const SearchValWrapper = styled.div`
display:flex;
align-items:center;
cursor:pointer;
padding:1vh;
height:auto;
`
const SearchListVal = styled.li`
list-style-type: none;
font-weight: 500;
width: 100%;
text-align: left;
font-size:14px;
`

const SearchValImg = styled.img`
height:40%;
width:40%;
border-radius: 6px;
`

const SearchBarList = styled.div`
display:flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
position:absolute;
box-shadow: -2px 5px 26px -1px rgba(191,184,184,1);
height: auto;
top: 10vh;
width: 20vw;
z-index: 2;
background-color:white;
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

const Span = styled.span`
margin-left: 1vw;
font-weight: 500;
`

const Button = styled.button`
background-color: transparent;
border: none;
font-size: 14px;
font-weight:400;
`

export { HeaderDiv, HeaderWrapper, Profile, Categories, CategoryLabel, NavWrapper, NavbarUL, NavbarLI, LinkStyled, LogoutBtn,SearchCartWrapper, SearchWrapper, SearchBarList, CartWrapper, UserInfo, Avatar, Username, UserDropdown, CartItemsLength, LoginUser, Input, Name, SearchListVal, SearchValWrapper, SearchValImg, Logo, SearchBtn, NavbarULCat, Span, Button }
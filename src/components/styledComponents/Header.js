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

const NavbarLI = styled.div`
font-size: 16px;
font-weight: 400;
`

const LinkStyled = styled(Link)`
text-decoration: none;
color: ${props => props.page === "welcome-signup" ? "white" : "black"};
font-size: ${props => props.option === "fav" ? "14px" : "16px"};
font-weight : ${props => props.option === "fav" ? "400" : "400"};
&:hover {
    color: inherit;
  }
`

const LogoutBtn = styled.span`
font-size: 14px;
`

const CartWrapper = styled.div` 
    width: 30vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const UserInfo = styled.div`
    width: 9vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;

`
const UserDropdown = styled.div`
display: ${(props) => (props.isHovered ? 'flex' : 'none')};
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

const Name = styled.div`
    text-transform: capitalize;
    font-weight: ${props => props.page === "welcome" ? 600 : 400};
    font-size: 16px;
`

const CartItemsLength = styled.span`
margin-left: 4px;
font-size: 12px;
`

const LoginUser = styled.div`
    display: flex;
    flex-direction: column;
`

const Offers = styled.div`
    display: flex;
    align-items: center;
    width:6vw;
    justify-content: space-evenly;
`

const Input = styled.input`
border: 1px solid #a6a6a6;
width: 35vw;
height: 5vh;
padding-left: 1vw;
border-radius: 5px;
font-size: 14px;
&:focus {
    outline: none; 
  }

`
const SearchWrapper = styled.div`
 display: flex;
 align-items: center;
 height: 5vh;
`

const SearchBtn = styled.button`
background-color:transparent;
border: none;
position: relative;
right: 30px;
`

const SearchValWrapper = styled.div`
display:flex;
align-items:center;
cursor:pointer;
padding:1vh;
height:auto;
margin: 2vh 0;

`
const SearchListVal = styled.div`
font-weight: 500;
margin-left: 2vw;
text-align: left;
font-size:14px;
`

const SearchValImg = styled.img`
width:25%;
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
width: 35vw;
z-index: 2;
background-color:white;
`

const Logo = styled.span`
display:flex;
justify-content: center;
align-items:center;
margin-left: ${props => props.page === "welcome" ? "none" : "1vw"};
font-weight:${props => props.page === "welcome" ? "700" : "500"};
font-size: ${props => props.page === "welcome" ? "40px" : "26px"};
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

const Location = styled.div`
display:flex;
padding: 0 2vw;
width: 22vw;
align-items: center;
font-size: 16px;
`

export { HeaderDiv, HeaderWrapper, Categories, CategoryLabel, NavbarLI, LinkStyled, LogoutBtn, Offers, SearchWrapper, SearchBarList, CartWrapper, UserInfo, Avatar, Username, UserDropdown, CartItemsLength, LoginUser, Input, Name, SearchListVal, SearchValWrapper, SearchValImg, Logo, SearchBtn, NavbarULCat, Span, Button, Location }
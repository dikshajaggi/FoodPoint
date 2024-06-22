import { Link } from "react-router-dom"
import styled from "styled-components"

const HeaderDiv = styled.div`
display: flex;
flex-direction: column;
width:100%;
position: sticky;
top: 0;
z-index: 2;
background-color:  ${props => props.theme.colors.header};
@media only screen and (max-width: 600px)  {
       padding: 0 2vw;
    }
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
margin-bottom:4vh;
display:${props => props.display === "subHeader" ? "flex" : "none"};
justify-content: space-evenly;
align-items:center;
position: relative;
z-index: 1;
height:6vh;
background-color: ${props => props.theme.colors.accent}
@media only screen and (max-width: 600px)  {
        display: none;
    }
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
color: white;
font-size: ${props => props.option === "fav" ? "14px" : "16px"};
font-weight : ${props => props.option === "fav" ? "400" : "400"};
&:hover {
    color: inherit;
  }
  @media only screen and (max-width: 600px)  {
  font-size: ${props => props.option === "fav" ? "14px" : "12px"};
    }
     @media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
     font-size: ${props => props.option === "fav" ? "14px" : "12px"};
}
`

const LogoutBtn = styled.span`
font-size: 14px;
`

const Cart = styled.div`
display: none;
@media only screen and (max-width: 600px)  {
        display: block;
    }
`
const CartWrapper = styled.div` 
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media only screen and (max-width: 600px)  {
        display: none;
    }
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
border-radius: 5px;
position:absolute;
box-shadow: -2px 5px 26px -1px rgba(191,184,184,1);
width:12vw;
position: absolute;
height: 20vh;
padding: 1vh;
z-index: 2;
background-color:white;
`
const Avatar = styled.button`
width: auto;
background-color: transparent;
border: none;
`
const Username = styled.div`
display: flex;
color: white;
flex-direction: column;
justify-content: space-between;
`

const Name = styled.div`
    text-transform: capitalize;
    font-weight: ${props => props.page === "welcome" ? 600 : 400};
    font-size: 16px;
    color: white;
`

const ChatGPTButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color:${props => props.theme.colors.accent};
  color: white;
  border: none;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 999;
  /* Add additional styles as needed */
`;

const CartItemsLength = styled.span`
margin-left: 4px;
font-size: 12px;
`

const LoginUser = styled.div`
    display: flex;
    width: 20%;
    align-items: center;
    justify-content: space-between;
`

const Offers = styled.div`
    display: flex;
    align-items: center;
    width:6vw;
    justify-content: space-evenly;
`

const Input = styled.input`
border: 1px solid transparent;
width: 35vw;
height: 5vh;
background-color: #4C4C4C;
color: ${props => props.theme.colors.text};
padding-left: 1vw;
border-radius: 5px;
font-size: 14px;
&:focus {
    outline: none; 
    border: 2px solid ${props => props.theme.colors.accent};
  }

`
const SearchWrapper = styled.div`
 display: flex;
 visibility: ${props => props.show === "true" ? "visible" : "hidden"};
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
color: ${props => props.theme.colors.text};
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
background-color:${props => props.theme.colors.header};
`

const Logo = styled.span`
display:flex;
justify-content: center;
align-items:center;
margin-left: ${props => props.page === "welcome" ? "none" : "1vw"};
font-weight:${props => props.page === "welcome" ? "700" : "500"};
font-size: ${props => props.page === "welcome" ? "40px" : "26px"};
color:${props => props.theme.colors.accent}
@media only screen and (max-width: 600px)  {
       font-size: ${props => props.page === "welcome" ? "40px" : "18px"};

    }
`

const NavbarULCat = styled.div`
display: flex;
justify-content: space-evenly;
list-style-type: none;
width:100%;
@media only screen and (max-width: 600px)  {
        display: none;
    }
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
const LogoLoc = styled.div`
display: flex;
`

const Location = styled.div`
display:flex;
padding: 0 2vw;
color: white;
align-items: center;
font-size: 16px;
cursor: pointer;
@media only screen and (max-width: 600px)  {
        display: none;
    }
`

const MobileHeader = styled.div`
display: none;
align-item: center;
justify-content: space-evenly;
position: fixed;
bottom: 0;
height: 5vh;
background-color: ${props => props.theme.colors.accent};
border-top: 4px solid white;
width:100%;
@media only screen and (max-width: 600px)  {
        display: flex;
    }
`

const UserDrawerStyled = styled.div`
width: 20vw;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 1vw;
`

export { MobileHeader, HeaderDiv, UserDrawerStyled, HeaderWrapper, Categories, CategoryLabel, NavbarLI, LinkStyled, LogoutBtn, Offers, SearchWrapper, SearchBarList, CartWrapper, Cart, UserInfo, Avatar, Username, UserDropdown, CartItemsLength, LoginUser, Input, Name, ChatGPTButton, SearchListVal, SearchValWrapper, SearchValImg, Logo, SearchBtn, NavbarULCat, LogoLoc, Span, Button, Location }
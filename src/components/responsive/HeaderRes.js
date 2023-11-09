import React, { useState } from 'react'
import {Wrapper } from './styledComponents/HeaderRes'
import { LinkStyled, Location, NavbarLI, Offers } from '../styledComponents/Header'
import { useTheme } from '@emotion/react';
import DrawerComponent from '../DrawerComponent';
import offers from "../../assets/offers.png"
import offersAccent from "../../assets/offersAccent.png"

const HeaderRes = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme()

    const toggleDrawer = () => {
        setOpen(!open);
      };

  return (
    <Wrapper>
        <Location onClick={toggleDrawer} type="responsive">
            {localStorage.getItem("location") !== null ? 
            `${localStorage.getItem("location").slice(0, 20)}....` 
            : null} 
            <i class="fa-solid fa-angle-down" 
            style={{ marginLeft: "1vw", marginTop: "4px", color: "red", cursor: "pointer" }}>
            </i>
        </Location>
        <Offers>
            {window.location.pathname === "/offers" ? <img src={offersAccent} alt="" style={{ height: "16px", width: "16px", marginTop: "2px" }} /> : <img src={offers} alt="" style={{ height: "16px", width: "16px", marginTop: "2px" }} />}
            <LinkStyled to="/offers" style={{ color: window.location.pathname === "/offers" ? theme.colors.accent : "black" }}><NavbarLI header="main">Offers</NavbarLI></LinkStyled>
        </Offers>
        <DrawerComponent open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default HeaderRes

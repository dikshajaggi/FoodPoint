import { Drawer } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../utilities/context/Context';
import { ButtonClose } from '../pages/styledComponents/Payment';
import langConfig from "../config/langConfig.json"
import { LinkStyled, UserDrawerStyled } from './styledComponents/Header';

const UserDrawer = ({ open, setOpen }) => {
    const context = useContext(Context)
    const langConfigHeader = langConfig[0].header

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Drawer open={open} onClose={toggleDrawer} anchor="right" PaperProps={{
            sx: {
                backgroundColor: "#323232",
                color: "white"
            }
        }}>
            <UserDrawerStyled style={{ width: "20vw" }}>
                <ButtonClose onClick={() => setOpen(!open)}><i class="fa-solid fa-xmark" style={{ fontSize: "22px", padding: "2vh", cursor: "pointer", color: "white" }}></i></ButtonClose>
                <LinkStyled style={{ fontSize: "14px" }} to="/orders">{context.language === "en" ? langConfigHeader.user_dropdown.orders.en : langConfigHeader.user_dropdown.orders.hn}</LinkStyled>
                <LinkStyled option="fav" to="/fav-restaurant">{context.language === "en" ? langConfigHeader.user_dropdown.favourites.en : langConfigHeader.user_dropdown.favourites.hn}</LinkStyled>
                <LinkStyled style={{ fontSize: "14px" }} onClick={() => context.language === "en" ? context.setLanguage("hn") : context.setLanguage("en")}>{context.language === "en" ? langConfigHeader.user_dropdown.lng.en : langConfigHeader.user_dropdown.lng.hn}</LinkStyled>
            </UserDrawerStyled>
        </Drawer >
    )
}

export default UserDrawer

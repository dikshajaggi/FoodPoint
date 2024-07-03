import { Drawer } from '@mui/material'
import React, { useContext } from 'react'
// import { Address, LocWrapper } from '../pages/styledComponents/WelcomePage';
import axios from 'axios';
import { Context } from '../utilities/context/Context';
import { ButtonClose } from '../pages/styledComponents/Payment';
import { LocateUserBtn } from './styledComponents/DrawerComponent';
import langConfig from "../config/langConfig.json"

const DrawerComponent = ({ open, setOpen }) => {
    const context = useContext(Context)

    const handleLocation = () => {
        const ReverseGeoCoding = (obj) => {
            let response = axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${obj.latitude}&lon=${obj.longitude}&format=json`)
            response.then(result => {
                if (result.data.display_name) setOpen(!open);
                localStorage.setItem('location', result.data.display_name);
                context.setLocation(result.data.display_name)
            })
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                ReverseGeoCoding(position.coords)
            },
            (error) => {
                console.error("Error getting user location:", error);
            }
        )
    }

    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <Drawer open={open} onClose={toggleDrawer} anchor="left" PaperProps={{
            sx: {
                backgroundColor: "#323232",
                color: "white"
            }
        }}>
            <ButtonClose onClick={() => setOpen(!open)}><i class="fa-solid fa-xmark" style={{ fontSize: "22px", padding: "2vh", cursor: "pointer", color: "white" }}></i></ButtonClose>
            {/* <LocWrapper component="drawer">
                <Address placeholder="Enter your delivery location...."></Address>
            </LocWrapper> */}
            <LocateUserBtn onClick={handleLocation} >
                {/* <i class="fa-solid fa-location-crosshairs" style={{ color: "black", fontSize: "24px" }}></i> */}
                <span>{context.language === "en" ? langConfig[0].location_using_gps.en : langConfig[0].location_using_gps.hn}</span >
                {/* <span style={{ fontSize: "16px" }}>Using GPS</span> */}
            </LocateUserBtn >
        </Drawer >
    )
}

export default DrawerComponent

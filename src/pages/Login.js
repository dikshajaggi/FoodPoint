import React from "react";
import { ImageWrapper, LoginWrapper } from "./styledComponents/Login";
import { HeaderOnlyLayoutWrapper} from "./styledComponents/LoginSignup";
import loginImg from "../assets/images/login.jpg"
import { SignIn } from "@clerk/clerk-react";


const Login = () => {
    return (
        <>
        <HeaderOnlyLayoutWrapper>
            <LoginWrapper>
                <SignIn />
            </LoginWrapper>
            <ImageWrapper>
                <img src={loginImg} alt="login" style={{ maxHeight: "100%" }} />
            </ImageWrapper>
        </HeaderOnlyLayoutWrapper>
        
        </>
    )
}

export default Login
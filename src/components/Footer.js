import React from 'react'
import { Copyright, FooterWrapper, Info, LinksWrapper, Logo } from './styledComponents/Footer'
import { LinkStyled } from './styledComponents/Header'

const Footer = () => {
    return (
        <FooterWrapper>
            <Info>
                <Logo>HungerBites</Logo>
                <LinksWrapper>
                    <LinkStyled to="/disclaimer" style={{ color: "white" }}>Disclaimer</LinkStyled>
                    <LinkStyled to="/about" style={{ color: "white" }}>About</LinkStyled>
                    <LinkStyled to="/privacy_policy" style={{ color: "white" }}>Privacy Policy</LinkStyled>
                    <LinkStyled to="/faq" style={{ color: "white" }}>Faq</LinkStyled>
                    <LinkStyled to="/terms_conditions" style={{ color: "white" }}>Terms & Conditions</LinkStyled>
                    <LinkStyled to="/help_support" style={{ color: "white" }}>Help & Support</LinkStyled>
                </LinksWrapper>
            </Info>
            <Copyright>All Rights Reserved. Copyright © 2023.</Copyright>
        </FooterWrapper>
    )
}
export default Footer

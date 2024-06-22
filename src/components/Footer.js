import React, { useContext } from 'react'
import { Copyright, FooterWrapper, Info, LinksWrapper, Logo } from './styledComponents/Footer'
import { LinkStyled } from './styledComponents/Header'
import langConfig from "../config/langConfig.json"
import { Context } from '../utilities/context/Context'

const Footer = () => {
    const langConfigFooter = langConfig[0].footer
    const context = useContext(Context)

    const changePageTitle = (title) => {
        document.title = title
    }

    return (
        <FooterWrapper>
            <Info>
                <Logo>FoodPoint</Logo>
                <LinksWrapper>
                    <LinkStyled onClick={() => changePageTitle(`FoodPoint | Disclaimer`)}  to="/disclaimer" style={{ color: "white" }}>{context.language === "en" ? langConfigFooter.disclaimer.en : langConfigFooter.disclaimer.hn}</LinkStyled>
                    <LinkStyled onClick={() => changePageTitle(`FoodPoint | About`)} to="/about" style={{ color: "white" }}>{context.language === "en" ? langConfigFooter.about.en : langConfigFooter.about.hn}</LinkStyled>
                    <LinkStyled onClick={() => changePageTitle(`FoodPoint | Privacy Policy`)} to="/privacy-policy" style={{ color: "white" }}>{context.language === "en" ? langConfigFooter.privacy_policy.en : langConfigFooter.privacy_policy.hn}</LinkStyled>
                    {/* <LinkStyled to="/faq" style={{ color: "white" }}>Faq</LinkStyled> */}
                    <LinkStyled onClick={() => changePageTitle(`FoodPoint | Terms & Conditions`)} to="/terms_conditions" style={{ color: "white" }}>{context.language === "en" ? langConfigFooter.terms.en : langConfigFooter.terms.hn}</LinkStyled>
                    {/* <LinkStyled to="/help_support" style={{ color: "white" }}>Help & Support</LinkStyled> */}
                </LinksWrapper>
            </Info>
            <Copyright>{context.language === "en" ? langConfigFooter.copyright.en : langConfigFooter.copyright.hn}</Copyright>
        </FooterWrapper>
    )
}
export default Footer

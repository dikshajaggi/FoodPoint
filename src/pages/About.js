import React, { useContext } from 'react'
import "../style.css"
import Header from '../components/Header'
import { AboutDesc, AboutHeading, AboutMain, AboutWrapper, Wrapper, Flex, Params, Strong, ImgWrapper, Images, FoodImg } from './styledComponents/About'
import Footer from '../components/Footer'
import team from "../assets/images/team.jpg"
import team1 from "../assets/images/team1.jpg"
import team2 from "../assets/images/team2.jpg"
import team3 from "../assets/images/team3.jpg"
import food from "../assets/images/food.jpg"
import { useTheme } from 'styled-components'
import { Context } from '../utilities/context/Context'
import langConfig from "../config/langConfig.json"

const About = () => {
    const theme = useTheme()

    const context = useContext(Context)
    return (
        <AboutWrapper>
            <Header />
            <AboutMain>

                <ImgWrapper section="first">
                    <Wrapper section="first">
                       {context.language === "en" ? <AboutHeading main="main"> Welcome to <span style={{ color: theme.colors.accent }}>FoodPoint!</span></AboutHeading> : <AboutHeading main="main"> <span style={{ color: theme.colors.accent }}>FoodPoint!</span> में आपका स्वागत है </AboutHeading> }
                        <AboutDesc>
                            {context.language === "en" ?  langConfig[0].about.main_desc.en : langConfig[0].about.main_desc.hn}
                        </AboutDesc>
                        <AboutHeading>{context.language === "en" ? "Our Story" : "हमारी कहानी"} </AboutHeading>
                        <AboutDesc>
                            {context.language === "en" ?  langConfig[0].about.story.en : langConfig[0].about.story.hn}
                        </AboutDesc>
                    </Wrapper>
                    <FoodImg src={food} alt=" /" style={{ height: "100%", width: "30%", marginRight: "2vw" }} />
                </ImgWrapper>




                <Wrapper part="commitment">
                    <AboutHeading>{context.language === "en" ? "Our Commitment" : "हमारी प्रतिबद्धता"}</AboutHeading>
                    <AboutDesc part="center">
                    {context.language === "en" ?  langConfig[0].about.commit.en : langConfig[0].about.commit.hn}
                    </AboutDesc>
                    <Params>
                        <Flex><Strong>{context.language === "en" ?  langConfig[0].about.commit_sub.quality.en : langConfig[0].about.commit_sub.quality.hn}</Strong>{context.language === "en" ?  langConfig[0].about.commit_sub.quality1.en : langConfig[0].about.commit_sub.quality1.hn}</Flex>
                        <Flex><Strong>{context.language === "en" ?  langConfig[0].about.commit_sub.variety.en : langConfig[0].about.commit_sub.variety.hn}</Strong>{context.language === "en" ?  langConfig[0].about.commit_sub.variety1.en : langConfig[0].about.commit_sub.variety1.hn}</Flex>
                        <Flex><Strong>{context.language === "en" ?  langConfig[0].about.commit_sub.convenience.en : langConfig[0].about.commit_sub.convenience.hn}</Strong>{context.language === "en" ?  langConfig[0].about.commit_sub.convenience1.en : langConfig[0].about.commit_sub.convenience1.hn}</Flex>
                        <Flex><Strong>{context.language === "en" ?  langConfig[0].about.commit_sub.reliability.en : langConfig[0].about.commit_sub.reliability.hn}</Strong>{context.language === "en" ?  langConfig[0].about.commit_sub.reliability1.en : langConfig[0].about.commit_sub.reliability1.hn}</Flex>
                    </Params>
                </Wrapper>

                <ImgWrapper>
                    <Wrapper part="team">
                        <AboutHeading>{context.language === "en" ? "Our Team" : "हमारी टीम"}</AboutHeading>
                        <AboutDesc>
                            <div> {context.language === "en" ?  langConfig[0].about.team.en : langConfig[0].about.team.hn}</div>
                        </AboutDesc>
                    </Wrapper>
                    <img src={team} alt="" style={{ height: "100%", width: "30%", marginRight: "2vw" }} />
                </ImgWrapper>

                <Images>
                    <img src={team1} alt="" style={{ height: "100%", width: "30%" }} />
                    <img src={team3} alt="" style={{ height: "100%", width: "30%" }} />
                    <img src={team2} alt="" style={{ height: "100%", width: "30%" }} />
                </Images>
                <AboutHeading>{context.language === "en" ? "Get in Touch" : "संपर्क में रहो"}</AboutHeading>
                <AboutDesc>
                {context.language === "en" ?  langConfig[0].about.get_in_touch.en : langConfig[0].about.get_in_touch.hn}
                </AboutDesc>

            </AboutMain>
            <Footer />
        </AboutWrapper>
    )
}

export default About

import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import "../style.css"
import { UserContext } from '../utilities/context/UserContext'
import Header from '../components/Header'
import { AboutDesc, AboutHeading, AboutMain, AboutWrapper, Wrapper, Flex, Params, Strong, ImgWrapper, Images } from './styledComponents/About'
import Footer from '../components/Footer'
import team from "../assets/team.jpg"
import team1 from "../assets/team1.jpg"
import team2 from "../assets/team2.jpg"
import team3 from "../assets/team3.jpg"
import food from "../assets/food.jpg"
import { useTheme } from 'styled-components'

const About = () => {
    const theme = useTheme()

    return (
        <AboutWrapper>
            <Header />
            <AboutMain>

            <ImgWrapper section = "first">
               <Wrapper section = "first">
               <AboutHeading main="main"> Welcome to <span style={{color: theme.colors.accent}}>HungerBites!</span></AboutHeading>
               <AboutDesc>
                    At HungerBites, we are passionate about food and dedicated to bringing the flavors of the world to 
                    your doorstep. Our mission is simple: to provide you with a convenient and delightful way to 
                    explore, order, and savor a wide variety of cuisines from the comfort of your home.
                </AboutDesc>
                <AboutHeading> Our Story </AboutHeading>
                <AboutDesc>Our journey began with a love for food and a desire to make the dining experience as convenient and enjoyable as possible. Founded in 2017, HungerBites started as a small, family-run operation. Today, we've grown into a thriving platform, connecting hungry food enthusiasts with the best local restaurants, food trucks, and culinary artisans in your area.</AboutDesc>
               </Wrapper>
                <img src={food} alt=" /" style={{height: "100%", width: "30%", marginRight: "2vw"}}/>
            </ImgWrapper>
                
                
                
                
                <Wrapper part = "commitment">
                <AboutHeading>Our Commitment</AboutHeading>
                <AboutDesc part = "center">
                At HungerBites, we believe that good food is more than just sustenance; it's an experience. That's why we've made it our mission to create a seamless, user-friendly platform that enables you to explore a world of flavors at your fingertips. We are committed to:
                </AboutDesc>
                <Params>
                <Flex><Strong>Quality</Strong> We partner with only the finest local restaurants and eateries to ensure that every dish you order is of the highest quality and freshness.</Flex>
                <Flex><Strong>Variety</Strong> With a diverse range of cuisines and menus to choose from, you'll never run out of options. From comfort food to international delights, we've got it all.</Flex>
                <Flex><Strong>Convenience</Strong> Ordering food online should be easy and hassle-free. Our user-friendly website and mobile app make the process simple and straightforward.</Flex>
                <Flex><Strong>Reliability</Strong> We understand that your time is precious. We promise prompt deliveries and real-time order tracking to keep you informed every step of the way.</Flex>
                </Params>
                </Wrapper>

                <ImgWrapper>
                <Wrapper part = "team">
                <AboutHeading>Our Team</AboutHeading>
                <AboutDesc>
                    <div>Behind HungerBites is a dedicated team of foodies, tech enthusiasts, and customer service experts who work tirelessly to ensure your experience is top-notch. We're here to assist you, whether you have questions about our service, need help with an order, or simply want recommendations on what to try next.</div>
                </AboutDesc>
               </Wrapper>
               <img src= {team} alt="" style={{height: "100%", width: "30%", marginRight: "2vw"}}/>
                </ImgWrapper>

                <Images>
                    <img src = {team1} alt="" style={{height: "100%", width: "30%"}}/>
                    <img src = {team3} alt="" style={{height: "100%", width: "30%"}}/>
                    <img src = {team2} alt="" style={{height: "100%", width: "30%"}}/>
                </Images>
                <AboutHeading>Get in Touch</AboutHeading>
                <AboutDesc>
                We love hearing from our customers and welcome your feedback. If you have any suggestions, comments, or questions, please don't hesitate to reach out to us. Your input helps us improve and provide you with an even better food ordering experience.
                Thank you for choosing HungerBites for your culinary adventures. We look forward to being your go-to destination for satisfying your cravings and exploring the world of flavors.
                Savor the moments, one delicious bite at a time.
                Bon appétit!
                </AboutDesc>

            </AboutMain>
            <Footer />
        </AboutWrapper>
    )
}

export default About

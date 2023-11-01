import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "../style.css"
import { UserContext } from '../utilities/context/UserContext'
import Header from '../components/Header'
import { AboutDesc, AboutHeading, AboutMain, AboutWrapper, Commitment, Flex, Params, Strong } from './styledComponents/About'
import Footer from '../components/Footer'

const About = () => {
    const username = useContext(UserContext)
    console.log(username.datajson, "datajson")
    const items = useSelector((store) => store.cart.items)
    console.log(items, items.length, "checking items in store")

    return (
        <AboutWrapper>
            <Header />
            <AboutMain>

                <AboutHeading main="main"> Welcome to FoodPoint!</AboutHeading>
                <AboutDesc>
                    At FoodPoint, we are passionate about food and dedicated to bringing the flavors of the world to 
                    your doorstep. Our mission is simple: to provide you with a convenient and delightful way to 
                    explore, order, and savor a wide variety of cuisines from the comfort of your home.
                </AboutDesc>
                
                <AboutHeading> Our Story </AboutHeading>
                <AboutDesc>Our journey began with a love for food and a desire to make the dining experience as convenient and enjoyable as possible. Founded in 2017, FoodPoint started as a small, family-run operation. Today, we've grown into a thriving platform, connecting hungry food enthusiasts with the best local restaurants, food trucks, and culinary artisans in your area.</AboutDesc>
                
                <Commitment>
                <AboutHeading>Our Commitment</AboutHeading>
                <AboutDesc part = "commitment">
                At FoodPoint, we believe that good food is more than just sustenance; it's an experience. That's why we've made it our mission to create a seamless, user-friendly platform that enables you to explore a world of flavors at your fingertips. We are committed to:
                </AboutDesc>
                <Params>
                <Flex><Strong>Quality</Strong> We partner with only the finest local restaurants and eateries to ensure that every dish you order is of the highest quality and freshness.</Flex>
                <Flex><Strong>Variety</Strong> With a diverse range of cuisines and menus to choose from, you'll never run out of options. From comfort food to international delights, we've got it all.</Flex>
                <Flex><Strong>Convenience</Strong> Ordering food online should be easy and hassle-free. Our user-friendly website and mobile app make the process simple and straightforward.</Flex>
                <Flex><Strong>Reliability</Strong> We understand that your time is precious. We promise prompt deliveries and real-time order tracking to keep you informed every step of the way.</Flex>
                </Params>
                </Commitment>

                <AboutHeading>Our Team</AboutHeading>
                <AboutDesc>Behind FoodPoint is a dedicated team of foodies, tech enthusiasts, and customer service experts who work tirelessly to ensure your experience is top-notch. We're here to assist you, whether you have questions about our service, need help with an order, or simply want recommendations on what to try next.</AboutDesc>

                <AboutHeading>Get in Touch</AboutHeading>
                <AboutDesc>
                We love hearing from our customers and welcome your feedback. If you have any suggestions, comments, or questions, please don't hesitate to reach out to us. Your input helps us improve and provide you with an even better food ordering experience.
                Thank you for choosing FoodPoint for your culinary adventures. We look forward to being your go-to destination for satisfying your cravings and exploring the world of flavors.
                Savor the moments, one delicious bite at a time.
                Bon appétit!
                </AboutDesc>

            </AboutMain>
            <Footer />
        </AboutWrapper>
    )
}

export default About

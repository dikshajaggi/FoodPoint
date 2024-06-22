import React, { useContext, useEffect, useState } from 'react'
import pizza from "../assets/categoryImg/pizza.jpg"
import burger from "../assets/categoryImg/burger.jpg"
import thali from "../assets/categoryImg/thali.jpg"
import combo from "../assets/categoryImg/combo.jpg"
import dessert from "../assets/categoryImg/dessert.jpg"
import roll from "../assets/categoryImg/roll.jpg"
import { CategoriesMainDiv, Category, CategoryWrapper, Head, Image, Label } from './styledComponents/Categories'
import { LinkStyled } from './styledComponents/Header'
import { Context } from '../utilities/context/Context'
import langConfig from "../config/langConfig.json"
import api from '../utilities/api'

const Categories = () => {
    const context = useContext(Context)
    const langConfigHeader = langConfig[0].header
    const images = {
        "pizza" : pizza,
        "burger" : burger,
        "roll" : roll,
        "thali" : thali,
        "combo" : combo,
        "dessert" : dessert
    }
    const [categories, setCategories] = useState([
        {image: pizza, en: "Pizza", hn: "पिज़्ज़ा"},
        {image: burger, en: "Burger", hn: "बर्गर"},
        {image: roll, en: "Roll", hn: "रोल"},
        {image: thali, en: "Thali", hn: "थाली"},
        {image: combo, en: "Combo", hn: "कॉम्बो"},
        {image: dessert, en: "Desserts and Sweets", hn: "मिठाइयाँ"}
    ])

    const getCategories = async() => {
       const response = await api.getAllCategories()
       console.log(response, "getAllCategories")
       setCategories(response.data)
    }

    const changePageTitle = (title) => {
        document.title = title
    }
    
    useEffect(() => {
        getCategories()
    }, [context.language])

  return (
    <CategoriesMainDiv>
        <Head>{context.language === "en" ? langConfigHeader.categoryLabel.en : langConfigHeader.categoryLabel.hn}</Head>
        <CategoryWrapper>
        {categories.map((item, index) => {
            return (
               <LinkStyled to={`/category/${item.en}`}>
                    <Category key={index} onClick={() => changePageTitle(`FoodPoint | ${item.en}`)}>
                        <Image src={images[item.image]} alt="category-image"></Image>
                        <Label>{context.language === "en" ? item.en : item.hn}</Label>
                    </Category>
               </LinkStyled>
            )
        })}
        </CategoryWrapper>
    </CategoriesMainDiv>
  )
}

export default Categories

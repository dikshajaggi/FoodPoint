import React from 'react'
import { MainContainer, ResultArea, SearchArea, Wrapper } from './styledComponents/DishDiscoveryGpt'
import Header from '../components/Header'
import Footer from '../components/Footer'

const DishDiscoveryGpt = () => {
  return (
    <Wrapper>
        <Header />
            <MainContainer>
                <SearchArea></SearchArea>
                <ResultArea></ResultArea>
            </MainContainer>
        <Footer />
    </Wrapper>
  )
}

export default DishDiscoveryGpt

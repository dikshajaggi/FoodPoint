import React, { useEffect, useState } from 'react'
import { Body, Button, Content, Head, Header, Image, LocationInput, LoginSignup, Main, SubHead, WelcomeText, Wrapper } from './styledComponents/WelcomePage'
import Footer from '../components/Footer'
import { LinkStyled, Logo } from '../components/styledComponents/Header'
import displayImg from "../assets/dining.jpg"

const WelcomePage = () => {
    const dynamicText = ["Hungry ?", "Unexpected guests ?", "Cooking gone wrong ?", "Late night at office ?"]
    const [textIndex, setTextIndex] = useState(0);
    const [text, setText] = useState(dynamicText[0]);

    useEffect(() => {
        const interval = setInterval(() => {
          // Calculate the next index for the text
          const nextIndex = (textIndex + 1) % dynamicText.length;
          setTextIndex(nextIndex);
          setText(dynamicText[nextIndex]);
        }, 3000);
    
        // Cleanup the interval when the component unmounts
        return () => clearInterval(interval);
      }, [textIndex]);



  return (
    <Wrapper>
        <Main>
            <Content>
                <Header>
                    <Logo page="welcome">FoodPoint</Logo>
                    <LoginSignup>
                        <Button type = "login">Login</Button>
                        <Button type = "signup">Sign up</Button>
                    </LoginSignup>
                </Header>
                <Body>
                    <WelcomeText>
                        <Head>{text}</Head>
                        <SubHead>Order food from favourite restaurants near you.</SubHead>
                    </WelcomeText>
                   <LinkStyled to="/home"><LocationInput>Home</LocationInput></LinkStyled> 
                </Body>
            </Content>
            <Image src= {displayImg}></Image>
        </Main>
        <Footer />
    </Wrapper>
  )
}

export default WelcomePage

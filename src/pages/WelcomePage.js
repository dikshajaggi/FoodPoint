import React, { useContext, useEffect, useState } from 'react'
import { Address, Body, Button, Content, FindFood, Head, Header, Image, LocWrapper, LocateUser, LocationInput, LoginSignup, Main, SubHead, WelcomeText, Wrapper } from './styledComponents/WelcomePage'
import Footer from '../components/Footer'
import { LinkStyled, Logo } from '../components/styledComponents/Header'
import displayImg from "../assets/dining.jpg"
import { Context } from '../utilities/context/Context'
import axios from 'axios'
import loadingSpinner from "../assets/loadingSpinner.gif"
import { redirect } from 'react-router-dom'

const WelcomePage = () => {
    const dynamicText = ["Hungry ?", "Unexpected guests ?", "Cooking gone wrong ?", "Late night at office ?"]
    const [textIndex, setTextIndex] = useState(0);
    const [text, setText] = useState(dynamicText[0]);
    const context = useContext(Context)
    const [changePage, setChangePage] = useState(false)
    const [fetchingLoc, setFetchingLoc] = useState(false)
    const [showError, setShowError] = useState(false)
        

    const handleClick= () => {
        if(context.location === null) setShowError(true)
    }

    const handleLocation = () => {
        setShowError(false)
        setFetchingLoc(true)
        const ReverseGeoCoding = (obj) => {
            let response =  axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${obj.latitude}&lon=${obj.longitude}&format=json`)
            response.then(result=> {
                console.log(result.data, "context.location result")
                localStorage.setItem('location', result.data.display_name);
                context.setLocation(result.data.display_name)
                // setTimeout(() => {
                    setChangePage(true)
                // }, 1000);
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


    useEffect(() => {
        if(context.location !== null) {
            setFetchingLoc(false)
            window.location.href = "/home"
            // return redirect("/home") 
        }
    }, [context.location])


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
                    <Logo page="welcome">HungerBites</Logo>
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
                   <LocationInput>
                    {console.log(changePage, "changePage")}
                        <LocWrapper><Address placeholder= "Enter your delivery location" value={fetchingLoc ? "fetching your location...." : null}></Address> <i class="fa-solid fa-location-crosshairs" style={{marginTop: "2vh", color: "#686b78"}}></i><LocateUser onClick={handleLocation}>Locate Me</LocateUser></LocWrapper>
                        <FindFood onClick={handleClick}>{fetchingLoc ? <img src={loadingSpinner} alt="" style = {{height: "40px", width: "40px"}}/>: "Find food" }</FindFood>
                    </LocationInput>
                    {showError ? <LocationInput type="error">Enter your delivery location</LocationInput> : null}
                </Body>
            </Content>
            <Image src= {displayImg}></Image>
        </Main>
        <Footer />
    </Wrapper>
  )
}

export default WelcomePage

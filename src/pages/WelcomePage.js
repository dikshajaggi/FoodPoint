import React, { useContext, useEffect, useState } from 'react'
import { Body, Button, Content, FindFood, Head, Header, Image, LocWrapper, LocateUser, LocationInput, LoginSignup, Main, SubHead, WelcomeText, Wrapper } from './styledComponents/WelcomePage'
// import Footer from '../components/Footer'
import { LinkStyled, Logo, Name } from '../components/styledComponents/Header'
import displayImg from "../assets/images/dining.jpg"
import { Context } from '../utilities/context/Context'
import loadingSpinner from "../assets/images/loadingSpinner.gif"
import { UserContext } from '../utilities/context/UserContext'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import langConfig from "../config/langConfig.json"

const WelcomePage = () => {
    const context = useContext(Context)
    const { userData } = useContext(UserContext)
    const navigate = useNavigate()
    const dynamicTextEnglish = ["Hungry ?", "Unexpected guests ?", "Cooking gone wrong ?", "Late night at office ?"]
    const dynamicTextHindi = ["भूख लगी है?", "अप्रत्याशित मेहमान?", "खाना बनाना गलत हो गया?", "कार्यालय में देर रात?"]
    const [dynamicText, setDynamicText] = useState(context.language === "en" ? dynamicTextEnglish : dynamicTextHindi)
    const [textIndex, setTextIndex] = useState(0)
    const [text, setText] = useState(dynamicText[0])
    // const [changePage, setChangePage] = useState(false)
    const [fetchingLoc, setFetchingLoc] = useState(false)
    const [showError, setShowError] = useState(false)

    useEffect (() => {
        if (context.language === "en") setDynamicText(dynamicTextEnglish)
        else setDynamicText(dynamicTextHindi)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [context.language])

    const handleClick = () => {
        if (context.location === null) setShowError(true)
    }

    const handleLocation = () => {
        setShowError(false)
        setFetchingLoc(true)
        const ReverseGeoCoding = (obj) => {
            let response = axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${obj.latitude}&lon=${obj.longitude}&format=json`)
            response.then(result => {
                localStorage.setItem('location', result.data.display_name);
                context.setLocation(result.data.display_name)
                // setTimeout(() => {
                //     setChangePage(true)
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
        if (context.location !== null) {
            setFetchingLoc(false)
            // window.location.href = "/main"
            navigate("/main")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [textIndex]);

    return (
        <Wrapper>
            <Main>
                <Content>
                    <Header>
                        <Logo page="welcome" style={{color: "#FB9235"}}>FoodPoint</Logo>
                        {userData !== null ? <Name page="welcome">Hello, {userData.firstName}</Name> : <LoginSignup>
                            <Button type="login"><LinkStyled to="/login" page="welcome">{context.language === "en" ?  langConfig[0].welcome.login.en : langConfig[0].welcome.login.hn}</LinkStyled></Button>
                            <Button type="signup"><LinkStyled to="/signup" page="welcome-signup" >{context.language === "en" ?  langConfig[0].welcome.signup.en : langConfig[0].welcome.signup.hn}</LinkStyled></Button>
                        </LoginSignup>}
                    </Header>
                    <Body>
                        <WelcomeText>
                            <Head>{text}</Head>
                            <SubHead>{context.language === "en" ?  langConfig[0].welcome.subhead.en : langConfig[0].welcome.subhead.hn}</SubHead>
                        </WelcomeText>
                        <LocationInput>
                            {/* {console.log(changePage, "changePage")} */}
                            <LocWrapper><i class="fa-solid fa-location-crosshairs" style={{ color: "#686b78" }}></i><LocateUser onClick={handleLocation}>{context.language === "en" ?  langConfig[0].welcome.locate.en : langConfig[0].welcome.locate.hn}</LocateUser></LocWrapper>
                            {/* <FindFood onClick={handleClick}>{fetchingLoc ? <img src={loadingSpinner} alt="" style={{ maxHeight: "100%" }} /> : context.language === "en" ?  langConfig[0].welcome.find.en : langConfig[0].welcome.find.hn}</FindFood> */}
                        </LocationInput>
                        {showError ? <LocationInput type="error">{context.language === "en" ?  langConfig[0].welcome.loc.en : langConfig[0].welcome.loc.hn}</LocationInput> : null}
                    </Body>
                </Content>
                <Image src={displayImg}></Image>
            </Main>
        </Wrapper>
    )
}

export default WelcomePage

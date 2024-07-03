import React, { useState, useEffect } from 'react'
import { Heading, MainContainer, Prompt, ResultArea, SearchArea, SubHead, Wrapper, HeadingWrapper, SampleQueries, QueryCard } from './styledComponents/DishDiscoveryGpt'
import Header from '../components/Header'
import Footer from '../components/Footer'
import run from '../utilities/chat'

const DishDiscoveryGpt = () => {
  const [searchInput, setSearchInput] = useState("")
  const [res, setRes] = useState([])
  const [textBoxValue, setTextBoxValue] = useState(null)

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }

  const handleSampleSearch =  async (search) => {
    setRes(["generating information..."])
    setTextBoxValue(search)
    const data = await run(`${search}. Provide detailed information about the top 5 of these with and tell whether it is veg or non veg. Don't give preparation method.`)
    setRes(data)
  }

  const handleSearch = async () => {
    setRes(["generating information..."])
    setTextBoxValue(searchInput)
    const data = await run(`${searchInput}. Provide detailed information about the top 5 of these with and tell whether it is veg or non veg. Don't give preparation method. If the query is not related to food, then just tell "This is not a food related question"`)
    setRes(data)
  }

  useEffect(() => {
    if (res.length !== 0 && res[0] !== 'generating information...') {
      setTextBoxValue(null)
    }
  }, [res])

  const queries = ["Low-calorie dessert options", "Brunch ideas for a family gathering", "Vegan-friendly main courses", "Chicken starters for party"]
  return (
    <Wrapper>
      <Header />
      <MainContainer>
        <HeadingWrapper>
        <Heading>Your AI-Driven Culinary Guide</Heading>
        <SubHead>AI-Powered Recommendations Tailored Just for You</SubHead>
        </HeadingWrapper>
        <SearchArea>
          <Prompt placeholder = "Message AI Dish Guru..." defaultValue = {textBoxValue} onChange={handleChange}></Prompt>
          <i class="fa fa-search" aria-hidden="true" style={{ marginLeft: "10px", fontSize: "26px", cursor: "pointer", color: "white", marginTop: "12px" }} onClick={ handleSearch }></i>
        </SearchArea>
        <ResultArea>
                {res.map((line, index) => {
                    if (line.startsWith('**')) {
                        return <strong key={index}>{line.replace(/\*\*/g, '')}</strong>;
                    } else if (line.startsWith('* ')) {
                        return <p key={index}>{line}</p>;
                    } else if (/^\*\*\d+\./.test(line)) {
                        return <p key={index}>{line}</p>;
                    } else {
                        return <p key={index}>{line}</p>;
                    }
                })}
        </ResultArea>
        {res.length === 0 && <SampleQueries>
            {queries.map((query, index) => <QueryCard key= {index} onClick={() => handleSampleSearch(query)}>{query}</QueryCard>)}
        </SampleQueries>  }
      </MainContainer>
      <Footer />
    </Wrapper >
  )
}

export default DishDiscoveryGpt
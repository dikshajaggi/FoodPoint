import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import api from '../utilities/api'
import { Input, Main, RecentDishes, Results, ResultsDisplay, SearchCard, SearchWrapper } from './styledComponents/Search'
import SpecificCard from '../components/RestCardforCart'
import Card from '../components/RestCard';
import { Link } from 'react-router-dom'

const Search = () => {
  const [data, setData] = useState([])
  const [searchVal, setSearchVal] = useState(null)

  const handleSearchRecent = async(input) => {
    const res = await api.search(input)
    setData(res.data)
  }

  const handleSearch = async(e) => {
    setSearchVal(e.target.value)
    const res = await api.search(e.target.value)
    setData(res.data)
    console.log(res.data, "search response")
  }

  useEffect(() => {
  if(searchVal === "") setData([])
  }, [searchVal])

  return (
    <Main>
      <Header />
      <SearchWrapper>
        <Input onChange={handleSearch} placeholder = "Search for restaurants and dishes"></Input>
        {data.length !== 0 ? <Results>
         {data.restaurants.length !== 0 ? <ResultsDisplay>
          <h5 style={{color: "white", margin: "30px 0"}}>Restaurants</h5>
          {data.restaurants.map(rest => <Link key={rest.id} style={{ textDecoration: 'none' }} to={`/rest/${rest._id}`}><Card {...rest} /> </Link>)}
         </ResultsDisplay> : null }
         {data.dishes.length !== 0 ? <ResultsDisplay>
         <h5 style={{color: "white", margin: "20px 0"}}>Dishes</h5>
          {data.dishes.map(dish => <SpecificCard {...dish}/>)}
         </ResultsDisplay> : null}
        </Results> : <RecentDishes>
          Recent Searches
          <SearchCard style={{marginTop: "24px"}} onClick={() => handleSearchRecent("Pizza")}>
            <i class="fa fa-search" style={{cursor: "pointer", color:  "#C2C1C1", marginRight: "10px"}} aria-hidden="true"></i>
            Pizza
          </SearchCard>
          <hr></hr>
          <SearchCard onClick={() => handleSearchRecent("Butter Chicken")}>
            <i class="fa fa-search" style={{cursor: "pointer", color:  "#C2C1C1",  marginRight: "10px"}} aria-hidden="true"></i>
            Butter Chicken
          </SearchCard>
        </RecentDishes> }
      </SearchWrapper>
      <Footer />
    </Main>
  )
}

export default Search

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import api from '../utilities/api'
import { Link, useParams } from 'react-router-dom'
import { CardWrapper, CategoryWrapper, Main } from '../layouts/styledComponents/Main'
import Card from '../components/RestCard'


const Category = () => {
  const {id} = useParams()
  const [restData, setRestData] = useState([])

  const getMenuItems = async() => {
    const response = await api.getMenu(id)
    setRestData(response.data)
  }

  useEffect(() => {
    getMenuItems()
  }, [id])


  return (
    <Main>
    <Header />
    <CategoryWrapper>
      <h6 style={{color: "white", marginTop: "2vh", fontSize: "22px"}}>Restaurants serving {id}</h6>
      {console.log(restData, "restDatarestData")}
      {restData.length === 0 ? <div style={{height: "80vh", color: "white", display: "flex", alignItems: "center", justifyContent: "center"}}>
        Loading Food.....
      </div> : <CardWrapper>
        {restData?.map((item) => (
            <Link key={item.id} style={{ textDecoration: 'none' }} to={`/rest/${item._id}`}>
                <Card {...item} />
            </Link>
        ))
        }
      </CardWrapper>
      }
    </CategoryWrapper>
    <Footer />
  </Main>
  )
}

export default Category

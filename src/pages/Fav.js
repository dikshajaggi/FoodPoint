import React, { useContext, useEffect, useState } from 'react'
import { DispCards, FavHeading, FavWrapper, Img, ImgWrapper } from './styledComponents/Fav'
import { Context } from '../utilities/context/Context'
import Card from '../components/RestCard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import langConfig from "../config/langConfig.json"
import api from '../utilities/api'
import { UserContext } from '../utilities/context/UserContext'

const Fav = () => {
  const context = useContext(Context)
  const { userId } = useContext(UserContext)
  const [fav, setFav] = useState([])

  const showfavRest = async () => {
   const data = await api.allFavRest(userId)
   const favDataPromises = data.items.map(item => api.specRestData(item.restId));
   const favData = await Promise.all(favDataPromises);
   setFav(favData);

  }

  useEffect(() => {
    if (userId) {
      showfavRest();
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])

  return (
    <div>
      <Header />
      <FavWrapper>
        <FavHeading>{context.language === "en" ? langConfig[0].fav.heading.en : langConfig[0].fav.heading.hn}</FavHeading>
        {fav.length !== 0 ? <DispCards> {fav.map(item => {
          return (
            <Link to={`/rest/${item?._id}`} style={{ textDecoration: 'none' }} > < Card {...item} /></Link>
          )
        })} </DispCards> : <ImgWrapper>
          <FavHeading size="small">{context.language === "en" ? langConfig[0].fav.sub_heading.en : langConfig[0].fav.sub_heading.hn}</FavHeading>
          <Img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/empty_404_3x_rgdw87" />
        </ImgWrapper>}
      </FavWrapper>
      <Footer />
    </div>
  )
}

export default Fav

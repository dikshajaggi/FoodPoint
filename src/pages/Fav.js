import React, { useContext } from 'react'
import { DispCards, FavHeading, FavWrapper, Img, ImgWrapper } from './styledComponents/Fav'
import { Context } from '../utilities/context/Context'
import Card from '../components/RestCard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Fav = () => {
  const context = useContext(Context)
  console.log(context.favRest, "checking fav rest")
  return (
    <div>
      <Header />
      <FavWrapper>
        <FavHeading>Your Plate, Your Favorites: Discover Delicious Dishes from a World of Flavors!</FavHeading>
        {context.favRest.length !== 0 ? <DispCards> {context.favRest.map(item => {
          return (
            <Link to={`/rest/${item?.feeDetails?.restaurantId}`} style={{ textDecoration: 'none' }} > < Card {...item} /></Link>
          )
        })} </DispCards> : <ImgWrapper>
          <FavHeading size="small">You haven't selected your favourite restaurants yet</FavHeading>
          <Img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/empty_404_3x_rgdw87" />
        </ImgWrapper>}
      </FavWrapper>
      <Footer />
    </div>
  )
}

export default Fav

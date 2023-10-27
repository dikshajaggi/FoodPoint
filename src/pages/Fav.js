import React, { useContext } from 'react'
import { FavWrapper } from './styledComponents/Fav'
import { Context } from '../utilities/context/Context'
import Card from '../components/RestCard'

const Fav = () => {
    const context = useContext(Context)
    console.log(context.favRest, "checking fav rest")
  return (
    <FavWrapper>
      {context.favRest.length !== 0 ? context.favRest.map(item => {
        return (
            <Card {...item} ></Card>
        )
      }) : null}
    </FavWrapper>
  )
}

export default Fav

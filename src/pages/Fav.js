import React, { useContext } from 'react'
import { FavWrapper } from './styledComponents/Fav'
import { Context } from '../utilities/context/Context'

const Fav = () => {
    const context = useContext(Context)
    console.log(context.favRest, "checking fav rest")
  return (
    <FavWrapper>
      
    </FavWrapper>
  )
}

export default Fav

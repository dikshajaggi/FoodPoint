import styled from "styled-components"

const CardCart = styled.div`
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    margin: auto;
    width: 90%;
    height: 300px;
    @media (max-width: 768px) {
        /* Styles for mobile screen size (up to 768px) */
        font-size: 14px;
        flex-direction: column;
      }
    
      @media (min-width: 769px) and (max-width: 1024px) {
        /* Styles for tablet screen size (769px - 1024px) */
        font-size: 18px;
        flex-direction: row;
      }
    
      @media (min-width: 1025px) {
        /* Styles for desktop screen size (1025px and above) */
        font-size: 22px;
        flex-direction: row;
    }
`

const DishImgCart = styled.img`
    width: 200px;
    height: 110px;
    @media (max-width: 768px) {
        /* Styles for mobile screen size (up to 768px) */
        width: 110px;
        height: 70px;
      }
    
      @media (min-width: 769px) and (max-width: 1024px) {
        /* Styles for tablet screen size (769px - 1024px) */
        width: 130px;
        height: 80px;
      }
    
      @media (min-width: 1025px) {
        /* Styles for desktop screen size (1025px and above) */
        flex-direction: row;
    }
`

const CardText = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        /* Styles for mobile screen size (up to 768px) */
        align-items: center;
      }
    
`

const CartRemoveBtn = styled.div`
height: 30px;
width: 80px;
border: none;
background-color:transparent;
margin-top: 1vh;
`

const DishName = styled.h2`
font-size: 22px;
@media (max-width: 768px) {
    /* Styles for mobile screen size (up to 768px) */
    font-size: 14px;
    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    /* Styles for tablet screen size (769px - 1024px) */
    font-size: 18px;
  }

  @media (min-width: 1025px) {
    /* Styles for desktop screen size (1025px and above) */
    font-size: 22px;
}
`
const PriceLabel = styled.h6`
font-size: 18px;
@media (max-width: 768px) {
    /* Styles for mobile screen size (up to 768px) */
    font-size: 10px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    /* Styles for tablet screen size (769px - 1024px) */
    font-size: 14px;
  }

  @media (min-width: 1025px) {
    /* Styles for desktop screen size (1025px and above) */
    font-size: 18px;
}
`
const QtyRemoveWrapper = styled.div`
display flex;
flex-direction: row;
`

export { CardCart, DishImgCart, CardText, CartRemoveBtn, DishName, QtyRemoveWrapper, PriceLabel }
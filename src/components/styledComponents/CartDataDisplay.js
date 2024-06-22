import styled from "styled-components"

const CardCart = styled.div`
    color: #d0d0d0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    margin: auto;
    width: 90%;
    height: 300px;
    @media only screen and (max-width: 600px)  {
        width: 100%;
    }
    @media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
        width: 100%;
}
`

const DishImgCart = styled.img`
    width: 200px;
    height: 110px;
`

const CardText = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 600px)  {
        padding-left: 14px;
    }
    @media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
        padding-left: 14px;
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
@media only screen and (max-width: 600px)  {
 font-size: 18px;
    }
    @media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
     font-size: 18px;
}
`

const QtyRemoveWrapper = styled.div`
display flex;
flex-direction: row;
`

export { CardCart, DishImgCart, CardText, CartRemoveBtn, DishName, QtyRemoveWrapper }
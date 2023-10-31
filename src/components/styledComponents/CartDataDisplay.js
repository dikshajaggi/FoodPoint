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
`

const DishImgCart = styled.img`
    width: 200px;
    height: 110px;
`

const CardText = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
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
`

const QtyRemoveWrapper = styled.div`
display flex;
flex-direction: row;
`

export { CardCart, DishImgCart, CardText, CartRemoveBtn, DishName,QtyRemoveWrapper }
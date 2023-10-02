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

const PizzaImgCart = styled.img`
    width: 200px;
    height: 110px;
`

const CardText = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`

const CartRemoveBtn = styled.button`
height: 30px;
width: 80px;
`

export { CardCart, PizzaImgCart, CardText, CartRemoveBtn }
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

const CartRemoveBtn = styled.button`
height: 30px;
width: 80px;
background-color:transparent;
border: 2px solid ${props => props.theme.colors.accent};
border-radius:5px;
margin-top: 1vh;
`

const DishName = styled.h2`
font-size: 22px;
`

export { CardCart, DishImgCart, CardText, CartRemoveBtn, DishName }
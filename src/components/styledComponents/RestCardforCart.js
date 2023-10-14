import styled from "styled-components";

const ItemAdd = styled.div`
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    margin-bottom: 4vh;
    border-bottom: 1px solid rgb(104, 103, 103);
`
const ItemAddData = styled.div`
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const MenuDishName = styled.h2`
    font-size: 24px;
    font-weight: 600;
`

const AddDishBtn = styled.button`
border: 1px solid ${props => props.theme.colors.accent};
border-radius: 5px;
height:5vh;
width:6vw;
color:white;
font-weight: 500;
background-color: ${props => props.theme.colors.accent};
`

const SpecificCardSubHead = styled.span`
font-weight: 600;
font-size: 22px;
`

const DishImg = styled.div`
width: 20vw;
height:25vh;
display: flex;
align-items: center;
justify-content:center;
margin-right: 3vw;
`
export { ItemAdd, ItemAddData, MenuDishName, SpecificCardSubHead, AddDishBtn, DishImg}
import styled from "styled-components";

const ItemAdd = styled.div`
    width: 100%;
    height: 28vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    margin-bottom: 4vh;
    border-bottom: 1px solid rgb(104, 103, 103);
`
const ItemAddData = styled.div`
    display: flex;
    flex:7;
    margin-right: 3%;
    padding: 0;
    flex-direction: column;
    justify-content: space-around;
`

const MenuDishName = styled.h2`
margin-top: 6px;
    font-size: 18px;
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

const AddBtnWrapper = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex:1;
`

const SpecificCardSubHead = styled.span`
font-weight: 600;
font-size: 14px;
`

const DishImg = styled.div`
margin-right: 2vw;

`
const Image = styled.img`
width:100%;
height: 100%;
border-radius: 8px;
`

const DishDesc = styled.div`
color: #a6a6a6;
font-size: 14px;
`

const VegClassifierIcon = styled.img`
height:20px;
width:20px;
`

export { ItemAdd, ItemAddData, AddBtnWrapper, MenuDishName, SpecificCardSubHead, AddDishBtn, DishImg, Image, DishDesc, VegClassifierIcon }
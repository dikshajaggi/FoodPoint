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
    @media only screen and (max-width: 600px)  {
        flex-direction: column;
       height: auto;
       margin-bottom: 8vh;
    }
    @media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
        flex-direction: column;
       height: auto;
       margin-bottom: 8vh;
}
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
    color: ${props => props.theme.colors.text};
`

const AddDishBtn = styled.button`
border: 1px solid ${props => props.theme.colors.accent};
border-radius: 5px;
height:5vh;
width:auto;
color:white;
font-weight: 500;
background-color: ${props => props.theme.colors.accent};
@media only screen and (max-width: 600px)  {
    width:auto;
    margin-bottom: 4px;
    }
@media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
    width:auto;
    margin-bottom: 4px;
}
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
    color: ${props => props.theme.colors.text};

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
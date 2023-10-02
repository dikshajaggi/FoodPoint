import styled from "styled-components";

const ItemAdd = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
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

const SpecificCardSubHead = styled.span`
font-weight: 600;
font-size: 22px;
`
export { ItemAdd, ItemAddData, MenuDishName, SpecificCardSubHead }
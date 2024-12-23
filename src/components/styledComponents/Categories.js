import styled from "styled-components";

const CategoriesMainDiv = styled.div`
width: 90%;
display: flex;
flex-direction: column;
`

const Head = styled.h4`
margin-top: 2vh;
color: white;
font-size: 20px;
`

const CategoryWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
   @media only screen and (max-width: 600px)  {
        flex-direction: column;
    }
    @media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
        flex-direction: column;
`

const Category = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 4vh;
`

const Image = styled.img`
border-radius: 50%;
height: 120px;
width: 140px;
overflow: hidden;
cursor: pointer;
`

const Label = styled.h4`
font-size: 16px;
color: white;
margin-top: 2vh;
cursor: pointer;
`

export {CategoriesMainDiv, Head, CategoryWrapper, Category, Image, Label}
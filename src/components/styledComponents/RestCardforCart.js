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

    @media (max-width: 768px) {
        /* Styles for mobile screen size (up to 768px) */
        flex-direction: column;
        height: auto;
      }
    
      @media (min-width: 769px) and (max-width: 1024px) {
        /* Styles for tablet screen size (769px - 1024px) */
        flex-direction: column;
        height: auto;
      }

      @media (min-width: 1025px) {
        /* Styles for desktop screen size (1025px and above) */
        flex-direction: row;
    }
`
const ItemAddData = styled.div`
    display: flex;
    flex:7;
    margin-right: 3%;
    padding: 0;
    flex-direction: column;
    justify-content: space-around;
    @media (max-width: 768px) {
        /* Styles for mobile screen size (up to 768px) */
        margin-top: 2vh;
        align-items: center;
      }
    
      @media (min-width: 769px) and (max-width: 1024px) {
        /* Styles for tablet screen size (769px - 1024px) */
        margin-top: 2vh;
        align-items: center;
      }

      @media (min-width: 1025px) {
        /* Styles for desktop screen size (1025px and above) */
    }
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
@media (max-width: 768px) {
    /* Styles for mobile screen size (up to 768px) */
    width: 10vw;
    height:2vh;
    margin: 2vh 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    /* Styles for tablet screen size (769px - 1024px) */
    width: 10vw;
    height:3vh;
    margin: 2vh 0;
  }

  @media (min-width: 1025px) {
    /* Styles for desktop screen size (1025px and above) */
    width: 6vw;
    height:5vh;
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
@media (max-width: 768px) {
    /* Styles for mobile screen size (up to 768px) */
    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    /* Styles for tablet screen size (769px - 1024px) */
    text-align: center;
  }

  @media (min-width: 1025px) {
    /* Styles for desktop screen size (1025px and above) */
    flex-direction: row;
}
`

const VegClassifierIcon = styled.img`
height:20px;
width:20px;
`

export { ItemAdd, ItemAddData, AddBtnWrapper, MenuDishName, SpecificCardSubHead, AddDishBtn, DishImg, Image, DishDesc, VegClassifierIcon }
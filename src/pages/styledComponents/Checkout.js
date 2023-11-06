import styled from "styled-components";

const CheckoutWrapper = styled.div`
display:flex;
flex-direction:column;
align-items: center; 
justify-content:center;
background-color: white;
border-radius: 8px;
padding: 4vh;
width: 25vw;
height: 34vh;
font-size: 18px;
border: 2px solid ${props => props.theme.colors.accent};
@media (max-width: 768px) {
    /* Styles for mobile screen size (up to 768px) */
    width: 30vw;
    padding: 2vh;
    height: 24vh;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    /* Styles for tablet screen size (769px - 1024px) */
    width: 35vw;
    padding: 2vh;
    height: 24vh;
  }

  @media (min-width: 1025px) {
    /* Styles for desktop screen size (1025px and above) */
    font-size: 20px;
  }
`

const CheckoutLabel = styled.h5`
font-weight: 500, 
font-size: 20px; 
`

const TotalLabels = styled.h6`
font-size: 18px;
@media (max-width: 768px) {
    /* Styles for mobile screen size (up to 768px) */
    font-size: 10px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    /* Styles for tablet screen size (769px - 1024px) */
    font-size: 14px;
  }

  @media (min-width: 1025px) {
    /* Styles for desktop screen size (1025px and above) */
    font-size: 20px;
  }
`

const CheckoutBtn = styled.button`
align-self: flex-end;
border:none;
border-radius: 5px;
height: 6vh;
width: 21vw;
font-size: 18px;
background-color: ${props => props.theme.colors.accent};
font-weight: 500;
color: white;
@media (max-width: 768px) {
    /* Styles for mobile screen size (up to 768px) */
    height: 3vh;
    width: 12vw;
    font-size: 10px;
    font-weight: 400;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    /* Styles for tablet screen size (769px - 1024px) */
    width: 100%;
    height: 100%;
    font-size: 12px;
    height: 3vh;
    width: 18vw;
  }

  @media (min-width: 1025px) {
    /* Styles for desktop screen size (1025px and above) */
    font-size: 20px;
  }

`
const TotalWrapper = styled.div`
height:10vh;
width: 100%;
margin-bottom:2vh;
`

export { TotalWrapper, CheckoutLabel, CheckoutBtn, TotalLabels, CheckoutWrapper }
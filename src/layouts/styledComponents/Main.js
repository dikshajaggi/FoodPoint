import styled from "styled-components"
import banner4 from "../../assets/banner/banner4.jpg"

const MainWrapper = styled.div`
background-color:  ${props => props.theme.colors.main};
display: flex;
flex-direction: column;
align-items: center;
min-height:100vh;
width:100%;
`

const Banner = styled.div`
  width: 100%;
  height: 400px; 
  background-image: url(${banner4}); 
  background-size: cover; 
  background-position: center; 
  opacity: 0.75;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  position: absolute;
  color: rgba(255, 255, 255, 1); 
  font-size: 24px; 
  text-align: center;
  font-weight: 600;
  background-color: black;
  padding: 10px;
`;

const CardWrapper = styled.div`
 width: 100%;
  padding: 0 8vw;
  margin-top: 14vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  justify-items: center; 
  align-items: center; 

  @media only screen and (min-width: 768px) and (max-width: 1024px) { /* iPad and Tablet */
    grid-template-columns: repeat(2, 1fr); 
  };
  @media only screen and (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr); 
  }
`

const CategoryWrapper = styled.div`
width: 90%;
display: flex;
flex-direction: column;
`

const Main = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
`

export { MainWrapper, CardWrapper, Banner, Text, CategoryWrapper, Main }
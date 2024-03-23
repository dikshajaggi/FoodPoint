import styled from "styled-components"
import banner4 from "../../assets/banner/banner4.jpg"

const MainWrapper = styled.div`
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
height:100%;
width:100%;
`

const Banner = styled.div`
  width: 100%;
  height: 400px; 
  background-image: url(${banner4}); 
  background-size: cover; 
  background-position: center; 
  opacity: 0.6;
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
width:100%;
padding: 0 4vw;
margin-top: 4vh;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
@media only screen and (max-width: 600px)  {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
`

export { MainWrapper, CardWrapper, Banner, Text }
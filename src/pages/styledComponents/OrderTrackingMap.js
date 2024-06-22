import styled from "styled-components";

const Wrapper = styled.div`
height: 100vh;
@media only screen and (max-width: 600px)  {
    display: flex;
    flex-direction: column;
    }
@media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
    display: flex;
    flex-direction: column;
}
`

const MapWrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

const MapDiv = styled.div`
    height: 400px; 
    width: 800px;
    @media only screen and (max-width: 600px)  {
        width: 90%;
    }
    @media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
        width: 90%;
    }
`

export { Wrapper, MapWrapper, MapDiv }
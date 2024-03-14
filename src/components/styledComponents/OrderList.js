import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
height:auto;
width:500px;
padding: 4vh;
position: absolute;
flex-direction:column;
align-items: center;
background-color:white;
border-radius: 8px;
border: 2px solid #D3D3D3;
margin: auto;
@media only screen and (max-width: 600px)  {
    width:auto;
    height:90%;
    }
@media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
    width:auto;
    height:90%;
}
`

const OrderListDiv = styled.div`
display: flex;
flex-direction: column;
border-bottom: 2px solid #D3D3D3;
margin-bottom: 4px;
width: 100%;
`

const DetailsWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

export { Wrapper, OrderListDiv, DetailsWrapper }
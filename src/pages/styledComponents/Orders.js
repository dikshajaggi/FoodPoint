import styled from "styled-components";

export const OrdersWrapper = styled.div`
background-color: ${props => props.theme.colors.main};
min-height:100vh;
overflow-y: auto;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media only screen and (max-width: 600px)  {
    display: flex;
    flex-direction: column;
    }
@media only screen and (min-width: 768px) and (max-width: 768px) and (min-height: 1025px) and (max-height: 1025px) {
    display: flex;
    flex-direction: column;
}
`

export const OrderCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border: 1px solid white;
    width: 60%;
    padding: 20px;
    margin-bottom: 20px;
`

export const Div1 = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
`
export const InfoDiv = styled.div`
display: flex;
flex-direction: column;
`

export const Btn = styled.div`
border: none;
font-weight: 600;
font-size: 18px;
background-color: transparent;
cursor: pointer;
color: #FF5200
`

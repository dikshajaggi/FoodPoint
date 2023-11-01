import styled from "styled-components";

const OfferWrapper = styled.div`
height:100%;
`
const OfferBanner = styled.div`
padding: 2vh;
`

const CardWrapper = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const OfferCardWrapper = styled.div`
    flex-wrap: wrap;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export { OfferWrapper, OfferBanner, CardWrapper, OfferCardWrapper }
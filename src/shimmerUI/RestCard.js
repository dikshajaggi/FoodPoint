import { Image, Info, Label, Offer, RestCardWrapper, RestName } from "./styledComponents/RestCard"

const RestCard = () => {
    return (
        <RestCardWrapper>
            <Image></Image>
            <RestName></RestName>
            <Info>
                <Label />  <Label />  <Label />
            </Info>
            <Offer></Offer>
        </RestCardWrapper>
    )
}

export default RestCard
import { DataCard, DishName, Price, Wrapper, Description, Button, Label } from "./styledComponents/SpecifcRest"

const SpecificRest = () => {
    return (
        <Wrapper>
            <DataCard>
                <DishName />
                <Label />
                <Price />
                <Description />
            </DataCard>
            <Button />
        </Wrapper>
    )
}

export default SpecificRest
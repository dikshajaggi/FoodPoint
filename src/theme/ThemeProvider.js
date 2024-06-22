import { ThemeProvider } from "styled-components"
import themes from "../theme/GlobalTheme"

const Themeprovider = ({children}) => {
    return(
        <>
        <ThemeProvider theme={themes}>
            {children}
        </ThemeProvider>
        </>
    )
}

export default Themeprovider
import { createContext } from "react";

const Username = "user"
const UserContext = createContext(Username)

const UserContextProvider = UserContext.Provider

export { UserContext, UserContextProvider }

import { useUser } from "@clerk/clerk-react";
import { createContext, useEffect, useState } from "react";

const Username = "user"
const UserContext = createContext(Username)

const UserContextProvider = (props) => {
    const [userId, setUserId] = useState(null)
    const [userData, setUserData] = useState(null)
    const { isSignedIn, user, isLoaded } = useUser()

    useEffect(() => {
        if (isLoaded && user !== null) {
            setUserId(user.id)
            setUserData(user)
        }
    }, [isLoaded, isSignedIn, user])
    return (
        <UserContext.Provider value={{
            userData,
            setUserData,
            userId,
            setUserId
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }

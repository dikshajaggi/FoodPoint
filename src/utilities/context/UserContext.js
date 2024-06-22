import { useUser } from "@clerk/clerk-react";
import { createContext, useEffect, useState } from "react";

const Username = "user"
const UserContext = createContext(Username)

const UserContextProvider = (props) => {
    const [userId, setUserId] = useState(null)
    const [userData, setUserData] = useState(null)
    const { isSignedIn, user, isLoaded } = useUser()

    useEffect(() => {
        console.log(user, "check user")
        if (isLoaded && user !== null) {
            setUserId(user.id)
            setUserData(user)
            console.log(isSignedIn, user, "checking user details")
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

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {

    if(localStorage.getItem("location") !== null) {
        return <Navigate to="/home" />
    }
 return children

};

export default ProtectedRoute
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const location = localStorage.getItem("location");

    if (location) {
        console.log("Working");
        return <Navigate to="/main" />;
    }

    return children;
};


export default ProtectedRoute
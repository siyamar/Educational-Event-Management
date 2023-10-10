import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { useContext } from "react";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location =useLocation();

    if(loading){
        return <div className="flex item-center relative"><span className="top-[300px] left-[550px] absolute loading loading-dots loading-lg"></span></div>
    }

    if(user){
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    let isAuth = false;
    if (isAuth){
        return <Navigate to={"/login"} />
    }
    return (
        <>
            {children}
        </>
    )
};

export default PrivateRoutes;
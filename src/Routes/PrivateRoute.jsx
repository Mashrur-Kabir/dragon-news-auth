import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log('in private route',location);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
            </div>
        ); // Loading spinner while user authentication is being checked
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;

/* 

in private route:

the location.pathname is "/item/0282e0e58a5c404fbd15261f11c2ab6a", the page you wanted to go.
so "state={location.pathname}"" stores the page you were trying to access (e.g., /item/123) in the state of the navigation.
When you are redirected from the PrivateRoute to the login page using the <Navigate> component, it sends along the location.state
so, On the login page, you can access this state using useLocation(). When you consolelog the location object, you'll see that the state set to /item/123
hence, when we login successfully from there, it takes you back to page you intended to visit

*/
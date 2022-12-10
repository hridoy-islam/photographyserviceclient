import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userContext } from '../Contexts/AuthContext';



const PrivateRoute = ({children}) => {

    const {user} = useContext(userContext);
    const location = useLocation();
    if(user && user.uid) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
        
    
};

export default PrivateRoute;
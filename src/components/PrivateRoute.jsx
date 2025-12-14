import { useAuth } from './AuthContext';
import { Children } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute =({children}) =>{
    const {token} =useAuth();
    return token ? children : <Navigate to ="/login"/>
};

export default PrivateRoute;
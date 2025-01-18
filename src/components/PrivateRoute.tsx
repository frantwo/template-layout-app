import React from 'react';
import { useStore } from '../context/useStore';
import { Navigate } from 'react-router';

interface PrivateRouteProps {
    children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {  
    const { user } = useStore();
    
    if (user === null) return <Navigate to="/login" replace />;
    else return <>{children}</>;
}
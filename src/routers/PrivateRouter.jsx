import React from 'react';
import useAuth from '../Hooks/useAuth';
import Loader from '../utlis/Loader';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { loading, user } = useAuth()
    const location = useLocation()

    if (loading) {
        return <Loader></Loader>
    }

    if (user) {
        return children;
    };

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRouter;
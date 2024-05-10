import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    const navigation = useNavigation()


    return (
        <div>
            <Navbar></Navbar>
            {navigation.state === "loading" ? <p>Loading..</p> : <Outlet></Outlet>}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
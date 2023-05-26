import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {

    const location = useLocation()
    // console.log(location)
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')

    return (
        <>
            {noHeaderFooter || <Header />}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </>
    );
};

export default Main;
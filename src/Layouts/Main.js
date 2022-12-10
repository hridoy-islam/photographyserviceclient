import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from "react-router-dom";
import DefaultFooter from '../Pages/Shared/Footer/DefaultFooter';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <DefaultFooter></DefaultFooter>
        </div>
    );
};

export default Main;
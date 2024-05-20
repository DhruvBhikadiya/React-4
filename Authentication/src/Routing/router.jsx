import React from 'react';
import { Route,Routes } from 'react-router-dom';

import Home from '../Home';
import Contact from '../Contact';
import About from '../About';
import Login from '../Login';
import Signin from '../Signin';
import PrivateRoutes from './PrivateRoutes'

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={
                <PrivateRoutes>
                    <Home/>
                </PrivateRoutes>
                }/>
                <Route path='/login' element={
                    <Login/>
                }/>
                <Route path='/signin' element={
                    <Signin/>
                    }/>
                <Route path='/about' element={
                <PrivateRoutes>
                    <About/>
                </PrivateRoutes>
                }/>
                <Route path='/contact' element={
                <PrivateRoutes>
                    <Contact/>
                </PrivateRoutes>
                }/>
            </Routes>
        </>
    )
}

export default Router;
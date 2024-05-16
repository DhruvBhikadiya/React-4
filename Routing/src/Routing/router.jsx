import React from 'react';
import { Route,Routes } from 'react-router-dom';

import Home from '../Home';
import Contact from '../Contact';
import About from '../About';
import Login from '../Login';
import Signin from '../Signin';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </>
    )
}

export default Router;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Formulario from '../components/Formulario';
import Home from '../components/Home';
import NavBars from '../components/NavBars';

import UseCounter from '../components/UseCounter';
import UseStateT from '../components/UseStateT';

const AppRouters = () => {
    return (
       <BrowserRouter>
       <NavBars/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/counter" element={<UseCounter/>}/>
                <Route path="/text" element={<UseStateT/>}/>
                <Route path="/form" element={<Formulario/>}/>
            </Routes>
       </BrowserRouter>
    );
};

export default AppRouters;
import React, { useState } from 'react';
import Categoria from './Categoria';
import Listar from './Listar';

const Addcategoria = () => {
    
    const [categoria, setCategoria]= useState([])

    return (
        <div>
            <Categoria setCategoria={setCategoria}/>
            <Listar categoria={categoria}/>
        </div>
    );
};

export default Addcategoria;
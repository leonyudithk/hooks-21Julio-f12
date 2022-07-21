import React from 'react';
import CardPintar from './Card';

const Listar = ({categoria}) => {
    return (
        <div>
             <CardPintar categoria={categoria}/>
        </div>
    );
};

export default Listar;
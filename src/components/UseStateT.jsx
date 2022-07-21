import React, { useState } from 'react';
import Button from '@mui/material/Button';

const UseStateT = () => {

    const [stateText, setStateText] = useState(false)

    console.log(stateText)

    return (
        <div>
            <Button color="secondary" onClick={() =>setStateText(!stateText)}>
                {
                stateText ?
                      <h1>El estado cambio a True</h1> 
                :
                      <h1>Cambio Estado a false</h1> 
                }
            </Button>
        </div>
    );
};

export default UseStateT;
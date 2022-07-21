import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//import { useNavigate } from "react-router-dom"

const UseCounter = () => {

    const numero = 10
    const [counter, setCounter] = useState(numero)

    //Importar y renombrar 
    //const navigate =  useNavigate()

    const handleIncrementar = () => {
        setCounter(counter + 1)
    }
    const handleDecrementar = () => {
        setCounter(counter - 1)
       //llamo al hooks que renombre navigate y entre parentisis le paso la
     //  navigate('/')

    }
    
    const handleReset = () => {
        setCounter(0)
    }
    return (
        <div>
            <h1>El Contador es: {counter}</h1>
            <Stack direction="row" spacing={2}>

                <Button variant="contained" color="secondary" onClick={handleIncrementar}>Incrementar</Button>
                <Button variant="contained" color="success" onClick={handleDecrementar}> Decrementar</Button>
                <Button variant="outlined" color="error" onClick={handleReset}> Reset</Button>
            </Stack>
        </div>
    );
};

export default UseCounter;
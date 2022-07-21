import React, { useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button';
import useForm from '../Hooks/useForm';


const Formulario = () => {

    const [datosForm, handleOnChange, reset]= useForm({
        email: '',
        pass: " ",
        nombre: " "
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(datosForm)
        reset()
        }

    useEffect(()=>{
        console.log('1-Montaje del Estado')

        console.log('2-actualización')

            return()=>{
                    console.log('3-Desmontaje del estado')
            }
    }, [datosForm])


    return (
        <div>
        <form onSubmit={handleSubmit}>
            <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="email" aria-describedby="my-helper-text" name="email" onChange={handleOnChange} />
            
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input id="pass" aria-describedby="my-helper-text" name="pass"  onChange={handleOnChange}  />
                    
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Nombre</InputLabel>
                    <Input id="pass" aria-describedby="my-helper-text" name="nombre"   onChange={handleOnChange}  />
                    
                </FormControl>
                <Button variant="contained" color="secondary" type="submit">Enviar</Button>
        </form>
           

        </div>
    );
};

export default Formulario;
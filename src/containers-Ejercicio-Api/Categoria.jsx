import React, { useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import useForm from '../Hooks/useForm';

const Categoria = ({setCategoria}) => {

        //Recordar las categorias anteriores
    const recordarCategoriasRef = useRef(null)

    const [datosForm, handleOnChange, reset]= useForm({
       buscar:'Hola',
      
    })

    useEffect(() => {
        recordarCategoriasRef.current.focus()
    }, [])

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(datosForm.buscar)
        setCategoria(cate=>[datosForm.buscar, ...cate])
        reset()
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='Escriba una categoria' type='text' name="buscar" value={datosForm.buscar} onChange={handleOnChange} ref={recordarCategoriasRef}/>
            <Button variant="contained" color="secondary" type="submit">Buscar</Button>
        </form>
        </div>
    );
};

export default Categoria;
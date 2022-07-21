import { useState } from "react";


const useForm = (initialState = {}) => {

        //crear el estado manipular la informacion del formulario de la
        const [datosForm, setDatosForm]=useState({initialState})

        //Para el evento OnChange que me permite leer la informacion del formulario (input)
        const handleOnChange = ({target}) => {
            setDatosForm({
                ...datosForm,
                [target.name] : target.value
            })

        }
        const reset = () => {
            setDatosForm({initialState})
        }

    return [ datosForm, handleOnChange, reset]
       
    
};

export default useForm;
import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);
    /* Cambiar los valores del input */
    const onInputChange = ({ target }) => {
        /* Para saber que name fue el que cambio */
        const { name, value } = target;
        setFormState({
            ...formState, //Spread operator para copiar todo lo de la state actual y solo mod
            [name]: value  //Cambiamos el valor en esa posicion por el nuevo
        })
    };

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        /* Para enviar una copia del formState y poder tomar */
        ...formState,
        formState, 
        onInputChange,
        onResetForm
    };
}


export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        /* agregar todo */
        case '[TODO] Add Todo':
            return [...initialState, action.payload];
        /* eliminar todo */
        case '[TODO] Remove Todo':
            /* Regresamos todos los todo que sean diferentes al que le envio action.payload */
            return initialState.filter(todo => todo.id !== action.payload);
        case '[TODO] Toogle todo':
            /* se regresa un nuevo arreglo gracias a el map */
            return initialState.map((todo) => {
                /* si el todo.id es igual al que se envia en el action.payload se le cambia el done */
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        /* Si es false regresa true y si es true regresa false */
                        done: !todo.done
                    }
                }
                return todo;
            });
            
        default:
            return initialState;
    }
}
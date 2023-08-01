import { useEffect, useReducer } from "react";
import { todoReducer } from "../useTodo/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos') || []);
}
export const useTodo = () => {
    /* Pasamos la referencia de la funcion todoReducer al useReduce */
    const [state, dispatch] = useReducer(todoReducer, [], init);
    /* Cuando useReducer debemos ejecutar un efecto secundario */
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state) || []);
    }, [state]);
    /* Agregar todo */
    const handleAddTodo = (valueTodo) => {
        /* console.log({ valueTodo }); */
        /* Nos creamos la accion que vamos a enviar al reducer */
        const action = {
            type: '[TODO] Add Todo',
            payload: valueTodo
        }
        /* le enviamos la funcion al reducer con el dispatch */
        dispatch(action);
    }
    /* ELiminar todo */
    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }
    /* Canbiar el toogle del done */
    const handleToogleTodo = (id) => {
        dispatch({
            type: '[TODO] Toogle todo',
            payload: id
        });
    }

    return {
        state,
        todosCount: state.length,
        pendiengTodosCount: state.filter((todo) => !todo.done).length,
        handleAddTodo,
        handleDeleteTodo,
        handleToogleTodo
    };
}

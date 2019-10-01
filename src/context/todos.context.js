import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
    { id: 1, task: "Mow the lawn using goats", completed: false},
    { id: 2, task: "Release lady bugs into garden", completed: true}
]
export const todosContext = createContext();

export const TodosProvider = props => {
    const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(defaultTodos);

    return (
        <todosContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo, editTodo}}>
            {props.children}
        </todosContext.Provider>
    )
}



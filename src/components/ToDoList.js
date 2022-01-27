import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({todos, setTodos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <ToDo
                        todo={todo}
                        key={todo.id}
                        text={todo.text}
                        setTodos={setTodos}
                        todos = {todos}/>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
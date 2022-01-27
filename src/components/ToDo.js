import React from"react";

const ToDo = ({text, todo, todos, setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    return(
        <div className="todo">
            <li className='todo-item'>{text}</li>
            <button className="complete-btn">
                <i className="fas fa-check"/>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"/>
            </button>
        </div>
    );
};

export default ToDo;
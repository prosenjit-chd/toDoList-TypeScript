import React from 'react';
import { ITodos } from '../Types/Types';

const ToDos: React.FC<{
    todos: ITodos,
    toggleTodos: (id: number) => void,
    deleteTodos: (id: number) => void
}> = ({ todos, toggleTodos, deleteTodos }) => {
    const deleteTodo = (id: number) => {
        if (window.confirm(`Are you sure to delete this?`)) {
            deleteTodos(id);
        }
    }
    return (
        <div className="section__todos">
            <h2>Todos</h2>
            {todos.todos.length ? <ul className="todos">
                {todos.todos.map(todo => (
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</span>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodos(todo.id)} />
                        <button onClick={() => { deleteTodo(todo.id) }}>X</button>
                    </li>
                ))}
            </ul> : <div>Todo list is Empty!</div>}
        </div>
    );
};

export default ToDos;
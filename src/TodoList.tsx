import React, { useState, useReducer } from 'react';

interface item {
    id: number;
    text: string;
    completed: boolean;
}

const todoReducer = (state: item[], action: { type: string, payload: any }) => {
    switch (action.type) {
        case 'TOGGLE_TODO': {
            // Declare variables here if needed
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
        }
        case 'REMOVE_TODO': {
            // Declare variables here if needed
            return state.filter((todo) => todo.id !== action.payload);
        }
        case 'ADD_TODO': {
            // Declare variables here if needed
            const newTodo: item = { id: Date.now(), text: action.payload, completed: false };
            return [...state, newTodo];
        }
        default:
            return state;
    }
};

const TodoList: React.FC = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [input, setInput] = useState<string>("");

    const handleToggle = (id: number) => {
        dispatch({ type: 'TOGGLE_TODO', payload: id });
    };

    const handleRemove = (id: number) => {
        dispatch({ type: 'REMOVE_TODO', payload: id });
    };

    const handleClick = () => {
        if (input.trim() !== '') {
            dispatch({ type: 'ADD_TODO', payload: input });
            setInput('');
        }
    };

    return (
        <div className='main-container'>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            textDecoration: todo.completed ? "line-through" : "none",
                            color: todo.completed ? "green" : "red",
                        }}
                    >
                        {todo.text}
                        <button className='complete-btn' onClick={() => handleToggle(todo.id)}>Completed</button>
                        <button className='remove-btn' onClick={() => handleRemove(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                placeholder='Enter Your Task'
                value={input}
                onChange={(e) => setInput(e.currentTarget.value)}
            />
            <button className='add-button' onClick={handleClick}>Add</button>
        </div>
    );
};

export default TodoList;

import React, { useState } from 'react';

interface item {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<item[]>([]);
    const [input, setInput] = useState<string>("")

    const handleToggle = (id: number) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            })
        )
    };
    const handleRemove = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleClick = () => {
        const newTodo: item = { id: Date.now(), text: input, completed: false }
        setTodos([...todos, newTodo]);
    }
    return (
        <div className='main-container'>
            <h1>Todo List</h1>
            <ul>
                {
                    // todos.map(todo => <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }} onClick={() => handleToggle(todo.id)}>{todo.text}</li>)
                    todos.map((todo) => (
                        <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none", color: todo.completed ? "green" : "red" }}>
                            {todo.text}
                            <button className='complete-btn' onClick={() => handleToggle(todo.id)}>Completed</button>
                            <button className='remove-btn' onClick={() => handleRemove(todo.id)}>Remove</button>
                        </li>
                    ))

                }
            </ul>
            <input type="text" placeholder='Enter Your Task'
                onChange={(e) => setInput(e.currentTarget.value)} />
            <button className='add-button' onClick={handleClick}>Add</button>
        </div>
    );
};

export default TodoList;
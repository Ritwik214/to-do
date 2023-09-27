import React from 'react';

function TodoList({ todos, toggleTodo }) {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? 'completed' : ''}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
            <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

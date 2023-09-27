import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [todoText, setTodoText] = useState('');

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && todoText.trim() !== '') {
      addTodo(todoText);
      setTodoText('');
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default TodoInput;

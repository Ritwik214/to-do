import React, { useState, useEffect } from 'react';
import './App.css';
import TodoInput from '../../to-do/src/components/TodoInput';
import TodoList from '../../to-do/src/components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    if (todoText.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: todoText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const resetTodos = () => {
    setTodos([]);
  };

  const sortTodos = (todos) => {
    const activeTodos = todos.filter((todo) => !todo.completed);
    const completedTodos = todos.filter((todo) => todo.completed);

    activeTodos.sort((a, b) => b.id - a.id);
    completedTodos.sort((a, b) => b.id - a.id);

    return [...activeTodos, ...completedTodos];
  };

  const initializeTodos = () => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  };

  const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  useEffect(() => {
    initializeTodos();
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>TODO</h1>
      <button className="reset-button" onClick={resetTodos}>
        Reset
      </button>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={sortTodos(todos)} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;

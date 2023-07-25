// src/App.tsx
import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>React Todo App</h1>
      <AddTodoForm />
      <div className="todo-list-container">
        <TodoList />
      </div>
    </div>
  );
};

export default App;

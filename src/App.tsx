// src/App.tsx
import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

const App: React.FC = () => {
  return (
    <div className="App"> {/* Contêiner principal da aplicação */}
      <h1>React Todo App</h1> {/* Título da página */}
      <AddTodoForm /> {/* Componente de formulário para adicionar novas tarefas */}
      <div className="todo-list-container"> {/* Contêiner para centralizar a lista de tarefas */}
        <TodoList /> {/* Componente que exibe a lista de tarefas */}
      </div>
    </div>
  );
};

export default App;

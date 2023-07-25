// src/components/TodoList.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeTodo, toggleComplete } from '../redux/todoSlice';
import { FaCheck, FaTimes } from 'react-icons/fa'; // Importe o ícone de "Check" e o ícone de "X"
import './TodoList.css'; // Importe o arquivo de estilo


const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleToggleComplete = (id: number) => {
    dispatch(toggleComplete(id));
  };

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="todo-list-container"> {/* Novo elemento div para centralizar a tabela */}
      <table>
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id} className={todo.completed ? 'completed-todo' : ''}>
              <td>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {/* Ícone de "Concluir" (Check) */}
                  {todo.completed ? (
                    <FaCheck className="completed-icon" onClick={() => handleToggleComplete(todo.id)} />
                  ) : (
                    <span className="check-icon-placeholder" onClick={() => handleToggleComplete(todo.id)}></span>
                  )}

                  {/* Texto da atividade */}
                  <span
                    style={{
                      textDecoration: todo.completed ? 'line-through' : 'none',
                      cursor: 'pointer',
                      marginLeft: '8px',
                    }}
                    onClick={() => handleToggleComplete(todo.id)}
                  >
                    {todo.text}
                  </span>
                </div>
              </td>
              <td className="actions">
                {/* Ícone de "Concluir" (Check) */}
                {todo.completed ? (
                  <span className="check-icon-placeholder"></span>
                ) : (
                  <FaCheck className="check-icon" onClick={() => handleToggleComplete(todo.id)} />
                )}

                {/* Ícone de "Remover" (X) */}
                <FaTimes className="remove-icon" onClick={() => handleRemoveTodo(todo.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;

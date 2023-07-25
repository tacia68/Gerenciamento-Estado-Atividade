// src/components/TodoList.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeTodo, toggleComplete } from '../redux/todoSlice';
import { FaCheck, FaTimes } from 'react-icons/fa'; // Importando os ícones "Check" e "X" da biblioteca react-icons
import './TodoList.css'; // Importando o arquivo de estilo

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos); // Obtendo as tarefas do estado usando o useSelector do react-redux
  const dispatch = useDispatch(); // Obtendo o dispatcher do react-redux para despachar as actions

  const handleToggleComplete = (id: number) => {
    dispatch(toggleComplete(id)); // Disparando a action toggleComplete para marcar ou desmarcar a tarefa como concluída
  };

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id)); // Disparando a action removeTodo para remover a tarefa da lista
  };

  return (
    <div className="todo-list-container"> {/* Nova div para centralizar a tabela */}
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
                    // Ícone de "Check" vazio como marcador para quando a tarefa ainda não foi concluída
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
                  // Ícone de "Check" vazio como marcador para quando a tarefa já foi concluída
                  <span className="check-icon-placeholder"></span>
                ) : (
                  // Ícone de "Check" verde para marcar a tarefa como concluída
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

export default TodoList; // Exportando o componente TodoList

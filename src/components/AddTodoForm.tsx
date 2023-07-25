// src/components/AddTodoForm.tsx
import React, { useState } from 'react';  // Importando React e useState do React
import { useDispatch } from 'react-redux'; // Importando useDispatch do react-redux
import { addTodo } from '../redux/todoSlice'; // Importando a action addTodo do arquivo todoSlice do Redux

const AddTodoForm: React.FC = () => {
  const [text, setText] = useState(''); // Criando estado local text com valor inicial de string vazia e a função setText para atualizá-lo
  const dispatch = useDispatch(); // Obtendo o dispatcher do Redux

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário (atualização da página)

    if (text.trim() !== '') { // Verifica se o texto não está vazio após retirar espaços em branco
      dispatch(addTodo(text)); // Dispara a action addTodo para adicionar a nova tarefa à lista
      setText(''); // Limpa o campo de entrada (text) após adicionar a tarefa
    }
  };

  return (
    <form onSubmit={handleSubmit}> {/* Quando o formulário for submetido, chama a função handleSubmit */}
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      {/* Campo de entrada onde o usuário pode digitar a nova tarefa. O valor é controlado pelo estado "text" */}
      <button type="submit" className="add-button">Add</button> {/* Botão para adicionar a tarefa ao clicar */}
    </form>
  );
};

export default AddTodoForm; // Exportando o componente AddTodoForm

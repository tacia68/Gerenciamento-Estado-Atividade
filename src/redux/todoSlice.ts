// src/redux/todoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Interface para representar uma tarefa (todo)
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Estado inicial da store, representando uma lista vazia de tarefas
const initialState: Todo[] = [];

// Criação do slice Redux usando createSlice do Redux Toolkit
const todoSlice = createSlice({
  name: 'todos', // Nome do slice, será usado como o prefixo para o nome das actions geradas
  initialState, // Estado inicial da store
  reducers: {
    // Action "addTodo" responsável por adicionar uma nova tarefa à lista de tarefas
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: state.length + 1, // Gera um novo ID para a tarefa com base no tamanho da lista atual
        text: action.payload, // Texto da tarefa é fornecido como payload da action
        completed: false, // Define a tarefa como não concluída (false) quando é adicionada
      };
      state.push(newTodo); // Adiciona a nova tarefa ao estado da store (lista de tarefas)
    },
    // Action "removeTodo" responsável por remover uma tarefa da lista de tarefas com base no ID fornecido
    removeTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload); // Filtra as tarefas e mantém apenas as que têm IDs diferentes do ID fornecido para a action
    },
    // Action "toggleComplete" responsável por marcar/desmarcar uma tarefa como concluída com base no ID fornecido
    toggleComplete: (state, action: PayloadAction<number>) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
      // Mapeia as tarefas e, para a tarefa com o ID fornecido para a action, inverte o valor da propriedade "completed" (marcando/desmarcando a tarefa como concluída)
      // Para as demais tarefas, mantém as informações inalteradas
    },
  },
});

// Exporta as actions geradas pelo createSlice para que possam ser usadas em outros arquivos
export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

// Exporta o reducer gerado pelo createSlice para que possa ser usado pela store
export default todoSlice.reducer;

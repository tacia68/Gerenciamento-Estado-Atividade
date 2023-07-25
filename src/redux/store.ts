// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

// Configuração da store usando o Redux Toolkit
const store = configureStore({
  reducer: {
    todos: todoReducer, // O reducer todoReducer será responsável por lidar com as ações relacionadas às tarefas
  },
});

// Exporta o RootState para que possa ser usado em outros arquivos
export type RootState = ReturnType<typeof store.getState>;

// Exporta a store configurada
export default store;

// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

// Exporte o RootState
export type RootState = ReturnType<typeof store.getState>;

export default store;

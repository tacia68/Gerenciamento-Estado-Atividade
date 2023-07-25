// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

ReactDOM.render(
  // O componente Provider é fornecido pelo pacote react-redux e permite que a store seja acessível por todos os componentes filhos
  <Provider store={store}>
    {/* O componente App é o componente principal da aplicação */}
    <App />
  </Provider>,
  document.getElementById('root') // Renderiza o aplicativo dentro do elemento com id "root" no index.html
);

// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';  // Імпорт Provider з react-redux
import { store } from './store';  // Імпорт store з нашого Redux store
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Обгортаємо додаток в Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);

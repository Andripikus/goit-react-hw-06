import React from 'react';
import ReactDOM from 'react-dom/client'; // Імпорт нового методу createRoot
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

// Отримуємо root елемент
const rootElement = document.getElementById('root');

// Створюємо root за допомогою createRoot
const root = ReactDOM.createRoot(rootElement);

// Використовуємо метод root.render для рендерингу
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

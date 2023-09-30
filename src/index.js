import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import store from './Store'
import { Provider } from 'react-redux'
import './index.css'; 

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <Provider store= {store}>
    <App />
  </Provider>
);

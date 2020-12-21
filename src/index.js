import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { configureClient } from './api/client';
import storage from './utils/storage';
import './index.css';
import App from './components/App';
import  { configureStore } from './store'

// Read token from storage
const { token } = storage.get('auth') || { token: null };

// Configure api client
configureClient(token);

//Configuramos el store nada más arrancar la aplicación
const store = configureStore();
console.log (store)

ReactDOM.render(
  <BrowserRouter>
    <App isInitiallyLogged={!!token} />
  </BrowserRouter>,
  document.getElementById('root'),
);

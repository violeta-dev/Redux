import React from 'react';
import ReactDOM from 'react-dom';


import { configureClient } from './api/client';
import storage from './utils/storage';
import './index.css';
import App, { Root } from './components/App';

import  { configureStore } from './store'
import {authLogin} from'./store/actions'

// Read token from storage
const { token } = storage.get('auth') || { token: null };

// Configure api client
configureClient(token);

//Configuramos el store nada más arrancar la aplicación
const store = configureStore();
console.log (store)
store.dispatch(authLogin('id'));
console.log(store.getState());


ReactDOM.render(
  <Root>
    <App isInitiallyLogged={!!token} dispatch={store.dispatch} isLogged={store.getState().auth}/>,
  </Root>,
  document.getElementById('root'),
);



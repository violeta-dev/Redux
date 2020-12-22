import React from 'react';
import ReactDOM from 'react-dom';


import { configureClient } from './api/client';
import storage from './utils/storage';
import './index.css';
import App, { Root } from './components/App';

import  { configureStore } from './store'




// Read token from storage
const { token } = storage.get('auth') || { token: null };

// Configure api client
configureClient(token);
console.log(token)

//Configuramos el store nada más arrancar la aplicación
const store = configureStore({auth: token});
console.log (store)

console.log(store.getState());

//store.dispatch(authLogin('id'));
console.log(store.getState());


const render = () => {
  ReactDOM.render(
    <Root store={store}>
      <App />
    </Root>,
    document.getElementById('root')
  );
};

render();






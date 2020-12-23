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

if (token){
  var isLogged= true
  console.log(isLogged)
}
console.log(isLogged)

const store = configureStore({auth: isLogged});




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






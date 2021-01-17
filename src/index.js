import React from 'react';
import ReactDOM from 'react-dom';

import { createBrowserHistory } from 'history';
import { configureClient } from './api/client';
import storage from './utils/storage';
import './index.css';
import App, { Root } from './components/App';

import  { configureStore } from './store'


// Read token from storage
const { token } = storage.get('auth') || { token: null };

// Configure api client
configureClient(token);
const history = createBrowserHistory();


if (token){
  var isLogged= true
}

//const store = configureStore({auth: isLogged} );
const store = configureStore({auth: isLogged} , { history});

ReactDOM.render(
  <Root store={store} history={history}>
    <App />
  </Root>,
  document.getElementById('root')
);







import React from 'react';
import { Provider } from 'react-redux';
//import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';


const Root = ({ children, store , history}) => (
    <Provider store={store}>
      <Router history= {history}>{children}</Router>
    </Provider>

  );
  
  export default Root;
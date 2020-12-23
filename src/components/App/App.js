import React from 'react';
import T from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { PrivateRoute, LoginPage } from '../auth';
import { AdvertPage, AdvertsPage, NewAdvertPage } from '../adverts';
import { AuthContextProvider } from '../../contexts/auth';
import NotFoundPage from './NotFoundPage';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

function App ({ isLogged, authLogin, authLogout }) {
  /*state = {
    isLogged: this.props.isInitiallyLogged,
  };*/

  const handleLogin = cb => {
    authLogin( isLogged);
    return cb;
  };

 /* const handleLogin = cb => {
    //despachamos la acción
    console.log(isLogged)
    authLogin(isLogged);
    return cb;

    //this.setState({ isLogged:  true }, cb);
  }*/

 const handleLogout = (isLogged) => {
    authLogout(isLogged)  
    this.setState({ isLogged: false });
  };

 
    //const { isLogged } = this.state;
   
    return (
      <AuthContextProvider
        value={{
          isLogged,
          onLogin: handleLogin,
          onLogout: handleLogout,
        }}
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/adverts" />
          </Route>
          <Route path="/login" exact>
            {routerProps => (
              <LoginPage onLogin={handleLogin} {...routerProps} />
            )}
          </Route>
          <PrivateRoute path="/adverts" exact>
            <AdvertsPage />
          </PrivateRoute>
          <PrivateRoute path="/adverts/new" exact component={NewAdvertPage} />
          <PrivateRoute path="/adverts/:id" exact component={AdvertPage} />
          <Route path="/404" exact>
            {NotFoundPage}
          </Route>
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </AuthContextProvider>
    );
  }


App.propTypes = {
  isInitiallyLogged: T.bool,
  authLogin: T.func,
  authLogout:T.func,

};


// Redux connection
const mapStateToProps = state => {
    return {
      isLogged: state.auth,
    };
  };

  const mapDispatchToProps = {
    authLogin: actions.authLogin,
    authLogout: actions.authLogout,
  };
  
  const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
  export default ConnectedApp;
    
  



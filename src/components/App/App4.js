import React from 'react';
import T from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { PrivateRoute, LoginPage } from '../auth';
import { AdvertPage, AdvertsPage, NewAdvertPage } from '../adverts';
import { AuthContextProvider } from '../../contexts/auth';
import NotFoundPage from './NotFoundPage';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import { getisLogged } from '../../store/selectors';

function App ({ isLogged, authLogin }) {

  const handleLogin = () => {
    const isLogged= true;
    authLogin( isLogged);
    return isLogged
    
  };

    return (
      <AuthContextProvider
        value={{
          isLogged,
          onLogin: handleLogin,
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
  authLogin: T.func,
  isLogged:T.bool,

};


// Redux connection
const mapStateToProps = state => {
    return {
      isLogged: getisLogged(state)
    };
  };

  const mapDispatchToProps = {
    authLogin: actions.authLogin,
  };
  
  const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
  export default ConnectedApp;
    
  



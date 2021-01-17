import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getisLogged } from '../../store/selectors';


const PrivateRoute = ({ isLogged, ...props }) => {
  return isLogged ? <Route {...props} /> : <Redirect to="/login" />;
};

export default connect(state => ({ isLogged: getisLogged(state) }))(
  PrivateRoute
);


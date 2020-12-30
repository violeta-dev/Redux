import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

//import { useAuthContext } from '../../contexts/auth';
import { getisLogged } from '../../store/selectors';

/*const PrivateRoute = props => {
  const { isLogged } = useAuthContext();
  const location = useLocation();
  return isLogged ? (
    <Route {...props} />
  ) : (
    <Redirect to={{ pathname: '/login', state: { from: location } }} />
  );
};

export default PrivateRoute;*/

const PrivateRoute = ({ isLogged, ...props }) => {
  return isLogged ? <Route {...props} /> : <Redirect to="/login" />;
};

export default connect(state => ({ isLogged: getisLogged(state) }))(
  PrivateRoute
);


import React from 'react';
import T from 'prop-types';
import { Alert, Col, Row, Typography } from 'antd';

import { login } from '../../../api/auth';
import LoginForm from './LoginForm';

const { Title } = Typography;

class LoginPage extends React.Component {
  state = {
    error: null,
  };

  handleSubmit = async (credentials) => {
    const { onLogin,location, history } = this.props;
    console.log(this.props)
    this.resetError();
    try {
      const isLogged = await login(credentials)
      console.log(isLogged)
      const { from } = location.state || { from: { pathname: '/' } };   
      console.log(from)  
      onLogin ( () => history.replace(from));
    } catch (error){
      console.log(error)
      this.setState({ error });
    }
  };
  
  

  resetError = () => this.setState({ error: null });

  render() {
    const { error } = this.state;
    return (
      <Row>
        <Col span={8} offset={8} style={{ marginTop: 64 }}>
          <Title style={{ textAlign: 'center' }}>Log In</Title>
          <LoginForm onSubmit={this.handleSubmit} />
          {error && (
            <Alert
              afterClose={this.resetError}
              closable
              message={error}
              showIcon
              type="error"
              style={{ marginTop: 24 }}
            />
          )}
        </Col>
      </Row>
    );
  }
}

LoginPage.propTypes = {
  onLogin: T.func.isRequired,
  history: T.shape({ replace: T.func.isRequired }).isRequired,
  location: T.shape({
    state: T.shape({ from: T.shape({ pathname: T.string }) }),
  }).isRequired,
};

export default LoginPage;

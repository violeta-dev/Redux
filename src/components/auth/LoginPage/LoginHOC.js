import React, { Component } from 'react';

import { connect } from 'react-redux';




const LoginHOC = (PassedComponent) => {
  class LoginParent extends Component {
    

    constructor() {
      super();

      this.state = {
        email: '',
        password: '',
        remember: false
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.canSubmit = this.canSubmit.bind(this);
    }

    

    handleChange(e) {
      const { name, value } = e.target;
      this.setState({
        [name]: value,
      });
    }
   
    canSubmit = () => {
      const { email, password } = this.state;
      return !!(email && password);
    };

    handleSubmit(e) {
      e.preventDefault();
      const { email, password, remember } = this.state;
      const data = {
        email,
        password,
        remember
      };

      this.props.onSubmit(data);
    }


    render() {
      const { email, password, remember } = this.state;
      return (
        <PassedComponent
          email={email}
          password={password}
          remember= {remember}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          canSubmit={this.canSubmit()}
        />
      )
    }
  }


function mapDispatchToProps(state){
 return state

};

  return connect(mapDispatchToProps)(LoginParent)
}

export default LoginHOC;
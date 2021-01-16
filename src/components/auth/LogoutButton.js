import React from 'react';
import T from 'prop-types';
import { LogoutOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

import ConfirmationButton from '../shared/ConfirmationButton';
import { authLogout } from '../../store/actions';


class LogoutButton extends React.Component {
  handleLogout = () => {
    const { authLogout } = this.props;
    const isLogged= false;
    authLogout( isLogged);
    
   
  };

  render() {
    const { authLogout, ...props } = this.props;
    return (
      <ConfirmationButton
        danger
        icon={<LogoutOutlined />}
        shape="round"
        type="dashed"
        confirmationProps={{
          title: 'Close session?',
          content: 'Are you sure you want to disconnect?',
          okText: 'Yes',
          cancelText: 'No',
          okButtonProps: {
            danger: true,
          },
        }}
        onConfirm={this.handleLogout}
        {...props}
      />
    );
  }
}

LogoutButton.propTypes = {
  authLogout: T.func.isRequired,
};

export default connect(null, { authLogout })(LogoutButton);
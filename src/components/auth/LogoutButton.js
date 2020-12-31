import React from 'react';
import T from 'prop-types';
import { LogoutOutlined } from '@ant-design/icons';

import { logout } from '../../api/auth';
import ConfirmationButton from '../shared/ConfirmationButton';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import { getisLogged } from '../../store/selectors';
import { useSelector, useDispatch } from 'react-redux';

function LogoutButton({ authLogout, history })  {

  const handleLogout = () => {
    console.log(this.props)
    const isLogged= false;
    authLogout(isLogged);
    
    return isLogged
  };

 
   // const { onLogout, ...props } = this.props;
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
        onConfirm={handleLogout}
        
      />
      
    );
  }


LogoutButton.propTypes = {
  onLogout: T.func.isRequired,
  authLogout:T.func,
  isLogged:T.bool,
};

// Redux connection
const mapStateToProps = state => {
    return {
      isLogged: getisLogged(state)
    };
  };
  const mapDispatchToProps = {
    authLogout: actions.authLogout,
  };

export const ConnectedLogoutButton = connect(mapStateToProps, mapDispatchToProps)(LogoutButton)



const ConnectedToAuthLogoutButton = props => 
  ({ onLogout }) => <LogoutButton onLogout={onLogout} {...props} />

export default ConnectedToAuthLogoutButton


  
                   



import React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from './LoginPage';
import {login} from '../../../api/auth'

jest.mock('../../../api/auth');
describe('LoginPage', () => {
  const props = {
    loading: false,
    error: null,
    onLogin: jest.fn(),
    location:{},
    
    
  };
  
  const render = () => shallow(<LoginPage {...props} />);
  test('snapshot', () => {
    const wrapper = render();
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should call onLogin', async () => {
    login.mockResolvedValue('isLogged');
    const wrapper = render();
    const LoginForm = wrapper.find('LoginForm');
    await (LoginForm.props().onSubmit('credentials'))
    expect(login).toHaveBeenCalledWith('credentials');
    expect(props.onLogin).toHaveBeenCalledWith('isLogged');
    
  });
});




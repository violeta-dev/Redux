import React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from './LoginPage';

describe('LoginPage', () => {
  const props = {
    loading: false,
    error: null,
    onLogin: jest.fn(),
  };

  const render = () => shallow(<LoginPage {...props} />);
  test('snapshot', () => {
    const wrapper = render();
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should call a onLogin', () => {
    const event = {
      preventDefault: jest.fn(),
    };
    const wrapper = render();
    const LoginForm = wrapper.find('LoginForm');
    LoginForm.hostNodes().simulate('submit', event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(props.onLogin).toHaveBeenCalled();
  });

});




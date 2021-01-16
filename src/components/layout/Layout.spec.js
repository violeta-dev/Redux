import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout';

describe('Layout', () => {
  test('should render a title', () => {
    const props = {
      title: 'Title',
    };
    const wrapper = shallow(<Layout {...props} />);

    expect(wrapper.exists()).toBe(true);
    console.log(wrapper.debug())
    expect(wrapper.find('#level').text()).toBe(props.title);
  });
});

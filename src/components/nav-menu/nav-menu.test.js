import React from 'react';
import { shallow } from 'enzyme';
import NavMenu from './NavMenu';
import { routes } from '../../routes/nav-routes';


it('should have the class name nav--menu--container', () => {
  const wrapper = shallow(<NavMenu />);
  expect(wrapper.find('.nav--menu--container').length).toBeGreaterThan(0);
});

it('should render a link for every route', () => {
  const wrapper = shallow(<NavMenu />);
  expect(routes.every(route => wrapper.find(route))).toBeTruthy();
});

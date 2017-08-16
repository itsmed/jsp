import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

it('should render the business title as a h1', () => {
  const wrapper = shallow(<Header />);
  const headings = wrapper.find('h1');
  expect.assertions(headings.length + 1);
  
  expect(headings.length).toBe(2);
  
  headings.nodes.forEach(node => expect(node.props.children).toBe('Just Potato Salad'));
});

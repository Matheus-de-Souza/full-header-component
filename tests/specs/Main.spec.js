/* globals describe, it */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

describe('<FullHeader />', () => {
  it('should have header tag when mount', () => {
    const wrapper = shallow(<FullHeader name="TDD" />);
    expect(wrapper.find('header')).to.have.length(1);
  });

  // it('should have props for name', () => {
  //     const wrapper = shallow(<FullHeader name='lyef' />);
  //     expect(wrapper.props().name).to.be.defined;
  // });

  // it('should create a correct DOM structure', () => {
  //     const wrapper = shallow(<FullHeader name='lyef' />);
  //     const componentMock = shallow(<h1>Hello lyef!</h1>);
  //     expect(wrapper.html()).to.be.equal(componentMock.html());
  // });
});

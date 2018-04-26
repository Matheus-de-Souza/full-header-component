/* globals describe, it, context */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

chai.use(chaiEnzyme());

describe('<FullHeader />', () => {
  it('should have header tag when mount', () => {
    const wrapper = shallow(<FullHeader />);
    expect(wrapper.find('header')).to.have.length(1);
  });

  context('title', () => {
    it('should have h1 tag when title passed', () => {
      const wrapper = shallow(<FullHeader title="TDD" />);
      expect(wrapper.find('h1')).to.have.length(1);
    });
    it('should not have h1 tag when title is not passed', () => {
      const wrapper = shallow(<FullHeader />);
      expect(wrapper.find('h1')).to.have.length(0);
    });
    it('should have h1 tag with title passed', () => {
      const wrapper = shallow(<FullHeader title="TDD" />);
      expect(wrapper.find('h1').props().children).to.be.equal('TDD');
    });
  });

  context('subtitle', () => {
    it('should have h2 tag when title passed', () => {
      const wrapper = shallow(<FullHeader subtitle="Curso TDD" />);
      expect(wrapper.find('h2')).to.have.length(1);
    });
    it('should not have h2 tag when title is not passed', () => {
      const wrapper = shallow(<FullHeader />);
      expect(wrapper.find('h2')).to.have.length(0);
    });
    it('should have h2 tag with title passed', () => {
      const wrapper = shallow(<FullHeader subtitle="Curso TDD" />);
      expect(wrapper.find('h2').props().children).to.be.equal('Curso TDD');
    });
  });

  context('bgColor', () => {
    it('should have background-color #ccc when none is passed ', () => {
      const wrapper = shallow(<FullHeader />);
      expect(wrapper).to.have.style('background-color').equal('#ccc');
    });
    it('should have background-color when bgColor is passed', () => {
      const wrapper = shallow(<FullHeader bgColor="#000" />);
      expect(wrapper).to.have.style('background-color').equal('#000');
    });
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

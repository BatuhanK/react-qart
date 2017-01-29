import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Qart from '../index';

const { describe, it } = global;

describe('Button', () => {
  it('should render a div', () => {
    const wrapper = shallow(<Qart value="I'm a kitten" imagePath="/kedicik.jpg" />);
    expect(wrapper.find('div')).to.have.length(1);
  });
  it('should render a canvas', () => {
    const wrapper = mount(<Qart value="I'm a kitten" imagePath="/kedicik.jpg" />);
    expect(wrapper.find('canvas')).to.have.length(1);
  });
});

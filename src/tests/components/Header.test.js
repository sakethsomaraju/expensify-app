import React from 'react'
import toJSON from 'enzyme-to-json'
import Header from '../../components/Header'
import {shallow} from 'enzyme'

test('Header should be rendered correctly',()=>{
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()

    const wrapper = shallow(<Header />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})
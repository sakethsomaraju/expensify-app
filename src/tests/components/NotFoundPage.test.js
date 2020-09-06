import React from 'react'
import NotFoundPage from '../../components/NotFoundPage'
import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json'

test('To render the not found page correctly ',()=>{
    const wrapper = shallow(<NotFoundPage />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})
import React from 'react'
import toJSON from 'enzyme-to-json'
import ExpenseListItem from '../../components/ExpenseListItem'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'

test('Should render a expense list item',()=>{

    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})
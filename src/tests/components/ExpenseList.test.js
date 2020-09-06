import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseList} from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'
import toJSON from 'enzyme-to-json'

test('should remember Expenselist with expenses',()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should render expense list with empty message',()=>{
    const wrapper = shallow(<ExpenseList expenses={[]} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})
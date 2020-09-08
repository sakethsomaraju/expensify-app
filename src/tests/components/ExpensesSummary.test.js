import React from 'react'
import { shallow } from 'enzyme';
import {ExpenseSummary} from '../../components/ExpenseSummary'

test('should render Expense summary with one expense to the dashboard',()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={3000} />)
    expect(wrapper).toMatchSnapshot()
})
test('should render Expense summary with multiple expense to the dashboard',()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={10} expenseTotal={31000}/>)
    expect(wrapper).toMatchSnapshot()
})
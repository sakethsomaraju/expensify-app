import React from 'react'
import { shallow } from 'enzyme'
import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'
import toJSON from 'enzyme-to-json'
 
let editExpense,removeExpense,history,wrapper

beforeEach(()=>{
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history ={push:jest.fn()}
    wrapper=shallow(
        <EditExpensePage 
            editExpense={editExpense}
            removeExpense={removeExpense}
            history={history}
            expense={expenses[2]}
        />
    )
})

test('Should render edit expense page',()=>{
    
    expect(toJSON(wrapper)).toMatchSnapshot()
})
test('should handle edit Expense',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2])
})
test('Should handle remove expenses',()=>{
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[2].id})
})
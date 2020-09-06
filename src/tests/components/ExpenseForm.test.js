import React from 'react'
import {shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import toJSON from 'enzyme-to-json'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('Should test expense form',()=>{
    const wrapper = shallow(<ExpenseForm />)
    expect(toJSON(wrapper)).toMatchSnapshot()

})

test('should render exoenseform with the data correctly',()=>{
    
    const wrappeer = shallow(<ExpenseForm expense={expenses[0]}/>)
    expect(toJSON(wrappeer)).toMatchSnapshot()
})

test('Should render error for innalid frn submission',()=>{
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should render description on input chanfe',()=>{
    const value ='new description'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('description')).toBe(value)
})

test('should set note on text area change',()=>{
    const value = 'new note'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').at(0).simulate('change',{
        target : {value}
    })
    expect(wrapper.state('note')).toBe(value)
})

test('should set amount for valid input',()=>{
    const value = '1'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe(value)
})

test('Shouldn\'t set amount if invalid input is given',()=>{
    const value = '1.4kk'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe('')
})

test('Should call onsubmit prop for valid form submission',()=>{
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount:expenses[0].amount,
        note:expenses[0].note,
        createdAt:expenses[0].createdAt
    })
})

test('should set new date on date change ', ()=>{
    const now= moment()
    const wrapper= shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})
test('should change focus on focus change',()=>{
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:true})
    expect(wrapper.state('calenderFocused')).toBe(true)
})
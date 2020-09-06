import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import {filters,altFilters} from '../fixtures/filters'
import toJSON from 'enzyme-to-json'
import moment from 'moment'
import { DateRangePicker } from 'react-dates'

let setTextFilter,sortByDate,wrapper,sortByAmount,setStartDate,setEndDate

beforeEach(()=>{
    setTextFilter = jest.fn()
    sortByAmount = jest.fn()
    sortByDate= jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate = {sortByDate}
            sortByAmount ={sortByAmount}
            setStartDate ={setStartDate}
            setEndDate ={setEndDate}
        />
    )   
})

test('should render expense list flters ',()=>{
    expect(toJSON(wrapper)).toMatchSnapshot()
})
test('should render expense list flters with al data correctly ',()=>{
    wrapper.setProps({
        filters:altFilters
    })
    expect(toJSON(wrapper)).toMatchSnapshot()
})
test('Should handle text change',()=>{
    const value = 'car'
    wrapper.find('input').simulate('change',{
        target:{value}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})
test('Should sort by date',()=>{
    const value= 'date'
    wrapper.setProps({
        filters:altFilters
    })
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByDate).toHaveBeenCalled()
})
test('Should sort by amount',()=>{
    const value= 'amount'
    
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByAmount).toHaveBeenCalled()
})
test('should handle date changes',()=>{
    
    const startDate = moment(0).add(3,'days')
    const endDate = moment(0).add(6,'days')
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})
test('should handle date focus change',()=>{
    const calenderFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused)
    expect(wrapper.state('calenderFocussed')).toBe(calenderFocused)
})
import moment from 'moment'
import {
    setStartDate,
    setEndDate,
    sortByAmount,
    sortByDate,
    setTextFilter
} from '../../actions/filters'

test('Should setup startdate',()=>{
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    })
})
test('Should setup enddate',()=>{
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
})
test('Sort by amount must be running',()=>{
    const action = sortByAmount()
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})
test('Sort by date must be running',()=>{
    const action=sortByDate()
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
})
test('set text filter the default one',()=>{
    const action = setTextFilter()
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})
test('set text filter with out random value',()=>{
    const action = setTextFilter('saketh')
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'saketh'
    })
})
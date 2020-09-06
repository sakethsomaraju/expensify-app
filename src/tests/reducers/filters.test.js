import filtersReducer from'../../reducers/filters'
import moment from 'moment'

test('should setup default filter values',()=>{
    const state = filtersReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

test('Should setup sortBy to amount',()=>{
    const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should setup sortBy to date',()=>{
    const currentState={
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }
    const state = filtersReducer(currentState,{type:'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
})

test('should set text filter',()=>{
    const text='lalalalallala'
    const action={
        type:'SET_TEXT_FILTER',
        text
    }

    const state = filtersReducer(undefined,action)
    expect(state.text).toBe('lalalalallala') 
})
test('should set startDate filter',()=>{
    const startDate = moment(0).add(3,'days').valueOf()
    const action={
        type:'SET_START_DATE',
        startDate
    }

    const state = filtersReducer(undefined,action)
    expect(state.startDate).toBe(moment(0).add(3,'days').valueOf()) 
})
test('should set endDate filter',()=>{
    const endDate = moment(0).add(3,'days').valueOf()
    const action={
        type:'SET_END_DATE',
        endDate
    }

    const state = filtersReducer(undefined,action)
    expect(state.endDate).toBe(moment(0).add(3,'days').valueOf()) 
})
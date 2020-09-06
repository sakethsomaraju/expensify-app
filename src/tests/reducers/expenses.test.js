import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'



test('should setup default values',()=>{
    const state = expensesReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})

test('should remove an expense',()=>{
    const action = expensesReducer(expenses,{
        type:'REMOVE_EXPENSE',
        id:'1'
    })
    expect(action).toEqual([expenses[1],expenses[2]])

})
test('should not remove an expense if id not found',()=>{
    const action = expensesReducer(expenses,{
        type:'REMOVE_EXPENSE',
        id:'33'
    })
    expect(action).toEqual(expenses)

})
test('should add an expense ',()=>{

    const newExpense =  {
        id:'4',
        description:'new test-bike fuel',
        note:'no note since test ',
        amount:381,
        createdAt:4000
    }
    const action = expensesReducer(expenses,{
        type:'ADD_EXPENSE',
        expense:newExpense
    })
    expect(action).toEqual([...expenses,newExpense])

})
test('should edit an expense',()=>{
    const newExpense =  {
        id:'1',
        description:'new test-bike fuel',
        note:'no note since test ',
        amount:381,
        createdAt:4000
    }
    const action = expensesReducer(expenses,{
        type:'EDIT_EXPENSE',
        id:'1',
        updates:newExpense
    })
    expect(action).toEqual([newExpense,expenses[1],expenses[2]])

})

test('shouldn\'t edit an expense if it is not found',()=>{
    const newExpense =  {
        id:'1',
        description:'new test-bike fuel',
        note:'no note since test ',
        amount:381,
        createdAt:4000
    }
    const action = expensesReducer(expenses,{
        type:'EDIT_EXPENSE',
        id:'33',
        updates:newExpense
    })
    expect(action).toEqual(expenses)

})
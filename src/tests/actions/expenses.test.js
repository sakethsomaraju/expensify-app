import {addExpense,editExpense,removeExpense} from '../../actions/expenses'

test('should setup remove expense action object',()=>{
    const action = removeExpense({id:'123abc'})
    expect(action).toEqual({
        id:'123abc',
        type:'REMOVE_EXPENSE'
    })
})
test('Should setup edit expense action ',()=>{
    const action = editExpense(
        'abc123',{
            name:'sak'
        
    })
    expect(action).toEqual({

        type:'EDIT_EXPENSE',
        id:'abc123',updates:{
        name:'sak'}
    })

    
})
test('should seetup add expense with provided values',()=>{
    const expenseData={
        description:'Rent',
        amount:1234,
        createdAt:3456,
        note:'this was last month\'s rent'
    }
    const action=addExpense(expenseData)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    })
})

test('Should setup add expense with default values',()=>{
    const action = addExpense()
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            description:'',
            amount:0,
            createdAt:0,
            note:'',
            id:expect.any(String)
        }
    })
})
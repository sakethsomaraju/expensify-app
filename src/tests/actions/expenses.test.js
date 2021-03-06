import { startAddExpense,addExpense ,editExpense, removeExpense,setExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

beforeEach((done)=>{
  const expensesData = {}
  expenses.forEach(({id,description,amount,createdAt,note})=>{
    expensesData[id]={description,amount,createdAt,note}
  })
  database.ref('expenses').set(expensesData).then(()=>done())
})

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense to database and store',(done)=>{
  const store = createMockStore({})
  const expenseData = {
    description:'mouse',
    amount:234,
    note:'ds',
    createdAt:56666
  }
  store.dispatch(startAddExpense(expenseData)).then(()=>{
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type:'ADD_EXPENSE',
      expense:{
        id: expect.any(String),
        ...expenseData
      }
    })
    return database.ref(`expenses/${actions[0].id}`).once('value') 
  }).then((snapshot)=>{
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
})
test('should add expense to database and store with defaults',(then)=>{
  const store = createMockStore({})
  const expenseData = {
    description:'',
    amount:0,
    note:'',
    createdAt:0
  }
  store.dispatch(startAddExpense({})).then(()=>{
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type:'ADD_EXPENSE',
      expense:{
        id: expect.any(String),
        ...expenseData
      }
    })
    return database.ref(`expenses/${actions[0].id}`).once('value') 
  }).then((snapshot)=>{
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
})
// test('should setup add expense action object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }
//   });
// });

test('Should setup setExpenses action',()=>{
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type:'SET_EXPENSES',
    expenses
  })
})


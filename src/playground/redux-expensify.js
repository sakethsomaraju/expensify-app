import {createStore,combineReducers} from 'redux'
import uuid from 'uuid'


//Add_expense
const addExpense = ({description='',note='',amount=0,createdAt=0}={})=>{
 return{
     type:'ADD_EXPENSE',
     expense:{
         id:uuid(),
         description,
         note,
         amount,
         createdAt
     }
 }
}
// remove Expense
const removeExpense = ({id}={})=>{
    return{
        type:'REMOVE_EXPENSE',
        id
    }
}
//edit expense
const editExpense = ({id,amount})=>{
    return{
        type:'EDIT_EXPENSE',
        id,
        amount
    }

}
//expense reducer=======================
const expenseReducerDefaultState = []
const expensesReducer = (state=expenseReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
          return [...state,action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>{
                return id!==action.id

            })
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id===action.id){
                    return{
                        ...expense,
                        ...action
                    }

                }else{
                        return expense
                }

            })
        default :
            return state
    }
}
//==========filters================
//set text filter
const setTextFilter = (text='')=>{
    return{
        type:'SET_TEXT_FILTER',
       text
    }
}
//sort by amount
const sortByAmount  = ()=>{
    return{
        type:'SORT_BY_AMOUNT'
    }
}
//sort by date
const sortByDate = ()=>{
    return{
        type:'SORT_BY_DATE'
        
    }
}
//add start date
const setStartDate = (startDate)=>{
    return{
        type:'SET_START_DATE',
        startDate
    }
}
//add end date
const setEndDate = (endDate)=>{
    return{
        type:'SET_END_DATE',
        endDate
    }
}
//filter reducer========================
const filtersReducerDefaultState ={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}


const filtersReducer = (state=filtersReducerDefaultState,action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return{
               ...state,
                ...action
            }
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy:'amount'

            }
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy:'date'
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate:action.startDate
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate:action.endDate
            }
        default:
            return state

    }
}
//get visible expenses
const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate})=>{
   return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expenses.createdAt <= endDate
        const textMatch =  expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt < b.createdAt ? 1 :-1
        }
        if(sortBy==='amount'){
            return a.amount<b.amount ? 1 :-1
        }
    })
    
}
//store creation=========================
const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    })
    )

store.subscribe(()=>{
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses)

})
 const expenseOne=store.dispatch(addExpense({description:'rent',amount:100700,createdAt:3}))
 const expenseTwo=store.dispatch(addExpense({description:'coffe',amount:12222,createdAt:4}))
 // console.log(expenseOne)
 //store.dispatch(removeExpense({id:expenseOne.expense.id}))
// store.dispatch(editExpense({id:expenseOne.expense.id,amount:3333333}))
// store.dispatch(setTextFilter('cof'))
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// store.dispatch(setStartDate(40))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(4))
// store.dispatch(setEndDate())

const demoState ={
    expenses:[{
        id:'abc',
        description:'Rent',
        note:'this is a note',
        amount:20000,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',//date or amount
        startDate:undefined,
        endDate:undefined
    }

}
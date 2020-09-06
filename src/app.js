import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'

import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'react-dates/lib/css/_datepicker.css'


const store = configureStore()

store.subscribe(()=>{
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses)
    
})

const water = store.dispatch(addExpense({description:'water bill',amount:200}))
const gas = store.dispatch(addExpense({description:'gas bill',amount:300}))
const rent = store.dispatch(addExpense({description:'rent',amount:55300,createdAt:3000}))
const shoe = store.dispatch(addExpense({description:'shoe',amount:553001,createdAt:300}))


const jsx = (
    <Provider store={store}>
        <AppRouter />    
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'))
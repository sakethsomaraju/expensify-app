import React from 'react'
import {connect} from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import SelectExpensesTotal from'../selectors/expenses-total'


export const ExpenseSummary = ({expenseCount,expenseTotal}) =>{
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formatedExpensesTotal = numeral(expenseTotal/100).format('$0,0.00')
    return(
        <div>
        <h1>Veiwing {expenseCount} {expenseWord} totalling {formatedExpensesTotal}</h1>
        </div>
    )
}

const mapStateToProps = (state)=>{
    const visibleExpenses = selectExpenses(state.expenses,state.filters)

    return{
        expenseCount: visibleExpenses.length,
        expenseTotal:SelectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)
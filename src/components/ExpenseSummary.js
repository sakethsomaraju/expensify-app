import React from 'react'
import {connect} from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import SelectExpensesTotal from'../selectors/expenses-total'
import {Link} from 'react-router-dom'

export const ExpenseSummary = ({expenseCount,expenseTotal}) =>{
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formatedExpensesTotal = numeral(expenseTotal/100).format('$0,0.00')
    return(
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Veiwing <span>{expenseCount}</span> {expenseWord} totalling <span>{formatedExpensesTotal}</span></h1>
                <div className="page-header__actions">
                <Link to="/create" className="button">Add Expense</Link>
                </div>
            </div>
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
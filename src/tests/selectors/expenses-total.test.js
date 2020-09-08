import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'


test('should return 0 if there are no expenses',()=>{
    const total = selectExpensesTotal([])
    expect(total).toEqual(0)

})

test('should correctly add up a single expense',()=>{
    const total = selectExpensesTotal([expenses[0]])
    expect(total).toEqual(195)
})
test('should correctly add up multiple expenses',()=>{
    const total = selectExpensesTotal(expenses)
    expect(total).toEqual(114195)

})
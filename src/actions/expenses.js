import uuid from 'uuid'

//add expense

export const addExpense = ({description='',note='',amount=0,createdAt=0}={})=>{
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
   export const removeExpense = ({id}={})=>{
       return{
           type:'REMOVE_EXPENSE',
           id
       }
   }
   //edit expense
  export const editExpense = (id,updates)=>{
       return{
           type:'EDIT_EXPENSE',
           id,
           updates
       }
   
   }
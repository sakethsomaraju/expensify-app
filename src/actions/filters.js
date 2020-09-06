//set text filter
export const setTextFilter = (text='')=>{
    return{
        type:'SET_TEXT_FILTER',
       text
    }
}
//sort by amount
export const sortByAmount  = ()=>{
    return{
        type:'SORT_BY_AMOUNT'
    }
}
//sort by date
export const sortByDate = ()=>{
    return{
        type:'SORT_BY_DATE'
        
    }
}
//add start date
export const setStartDate = (startDate)=>{
    return{
        type:'SET_START_DATE',
        startDate
    }
}
//add end date
export const setEndDate = (endDate)=>{
    return{
        type:'SET_END_DATE',
        endDate
    }
}
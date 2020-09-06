import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter,sortByDate,sortByAmount, setStartDate,setEndDate} from '../actions/filters'
import {DateRangePicker} from 'react-dates'

export class ExpenseListFilters extends React.Component{
    state={
        calenderFocussed:null
    }
    onDatesChange =({startDate,endDate})=>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange=(calenderFocussed)=>{
            this.setState(()=>({calenderFocussed}))
    }
    onTextChange = (e)=>{
        this.props.setTextFilter(e.target.value)
    }
    onSortChange=(e)=>{
        if(e.target.value==='date'){
            this.props.sortByDate()
        }else if(e.target.value==='amount'){
            this.props.sortByAmount()
        }
    }
    render(){
        return(
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextChange}></input>
        
                <select 
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocussed}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=> false}
                    showClearDates={true}
                />
            </div>
            )

    }
}



const mapStateToProps = (state)=>{
    return{
        filters:state.filters
    }

}
const mapDispatchToProps = (dispatch)=>{
    return {
        setTextFilter:(text)=>dispatch(setTextFilter(text)),
        setStartDate:(startDate)=>dispatch(setStartDate(startDate)),
        setEndDate:(endDate)=>dispatch(setEndDate(endDate)),
        sortByDate:()=>dispatch(sortByDate),
        sortByAmount:()=>dispatch(sortByAmount)
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(ExpenseListFilters)
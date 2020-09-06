import {createStore} from 'redux'

const incrementCount = ({incrementBy= 1 }={}) => {
    return {
        type:'INCREMENT',
        incrementBy
    }
}
const decrementCount = ({decrementBy = 1}={})=>{
    return {
        type:'DECREMENT',
        decrementBy
    }

}
const setCount = ({setBy = 0}={})=>{
    return{
        type:'SET',
        setBy
    }
}
const resetCount = ()=>{
    return{
        type:'RESET',
        reset:0
    }
}

const store = createStore ( (state={count:0},action)=>{

    switch(action.type){
        case 'INCREMENT':
            
            return {count : state.count + action.incrementBy};
        case 'DECREMENT':
            
            return {count : state.count - action.decrementBy};
        case 'SET':
            return {count:action.setBy}
        case 'RESET':
            return {count :action.reset};
        
        default :
            return state
            

        }
    
})


store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(incrementCount({incrementBy:5}))
store.dispatch(decrementCount({decrementBy:8}))
store.dispatch(setCount({setBy:44}))
store.dispatch(resetCount())





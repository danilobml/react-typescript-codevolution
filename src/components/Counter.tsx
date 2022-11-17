import { useReducer } from 'react'

const initialState = { count: 0 } 

type State = {count:number;}

type UpdateAction = {
    type: 'INCREMENT' | 'DECREMENT'; payload: number;
}

type ResetAction = {
    type: 'RESET'
}

type Action = UpdateAction | ResetAction;

function reducer (state: State, action: Action) {
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count + action.payload}
        case 'DECREMENT':
            return {count: state.count - action.payload}
        case 'RESET':
            return initialState
        default:
            return state
    }
}

function Counter() {
const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <div>Counter: {state.count}</div>
        <button onClick={()=> dispatch({type: 'INCREMENT', payload: 1})}>+</button>
        <button onClick={()=> dispatch({type: 'DECREMENT', payload: 1})}>-</button>
        <button onClick={()=> dispatch({type: 'RESET'})}>Reset</button>
    </div>
  )
}

export default Counter
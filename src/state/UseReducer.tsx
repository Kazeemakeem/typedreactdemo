import React, { useReducer } from 'react'

type CounterState = {
    count: number
}

type CounterAction ={
    type: 'increment' | 'decrement';
    payload: number
}
type CounterReset ={
    type: 'reset';
}

const initialState = { count: 0}

function reducer(state: CounterState, action: CounterAction | CounterReset) {
    switch(action.type){
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
        case 'reset':
            return initialState
        
        default:
            return state
    }
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={(event) => {
          console.log(event.target)
          dispatch({ type: 'increment', payload: 10})}}>Increment 10</button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10})}>Decrement 10</button>
      <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
    </>
  )
}

export default UseReducer

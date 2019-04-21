import * as React from 'react'
import {
  useReduxDispatch,
  useReduxState,
} from 'reactive-react-redux'
import {
  increment,
  incrementIFOdd,
  decrement
} from '../modules'
import { State } from '../modules'

const Counter = () => {
  const state = useReduxState<State>()
  const dispatch = useReduxDispatch()  
  return(
  <>
    Clicked: {state.count} times <button onClick={() => dispatch(increment())}>+</button> <button onClick={() => dispatch(decrement())}>-</button>{' '}
    <button onClick={() => dispatch(incrementIFOdd())}>Increment if odd</button>{' '}
    <button onClick={() => dispatch({ type: 'INCREMENT_ASYNC' })}>Increment async</button>
  </>)
}

export default Counter

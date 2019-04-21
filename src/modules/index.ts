import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'

const actionCreator = actionCreatorFactory()
export const increment = actionCreator<null>('INCREMENT')
export const incrementIFOdd = actionCreator<null>('INCREMENT_IF_ODD')
export const decrement = actionCreator<null>('DECREMENT')

export type State = {
  count: number
}

const initinalState: State = {
  count: 0
}

const counter = reducerWithInitialState(initinalState).case(increment, state => 
  ({count: state.count + 1})
).case(incrementIFOdd, state => 
  ({count: (state.count % 2 !== 0) ? state.count + 1 : state.count})
).case(decrement, state => 
  ({count: state.count - 1})
)

export default counter

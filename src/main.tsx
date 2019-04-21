import * as React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { ReduxProvider } from 'reactive-react-redux'
import Counter from './components'  
import counter from './modules'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(counter, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const App = () => <ReduxProvider store={store}>
  <Counter />
</ReduxProvider>

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)

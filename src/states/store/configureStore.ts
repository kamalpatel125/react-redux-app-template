import { applyMiddleware, createStore, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'
import reduxImmutableStateInvariantMiddleware from 'redux-immutable-state-invariant'
import { createBrowserHistory } from 'history'

import rootReducer from './reducers'

export const history = createBrowserHistory()

declare let module: { hot: any }
const connectRouterHistory = connectRouter(history)
const reactRouterMiddleware = routerMiddleware(history)
const isDevelopment = process.env.NODE_ENV !== 'production'

const configureStoreProd = (initialState = {}) => {
  const middlewares = [
    thunkMiddleware,
    reactRouterMiddleware
  ]
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  )
}

const configureStoreDev = (initialState = {}) => {
  const middlewares = [
    reduxImmutableStateInvariantMiddleware(),
    thunkMiddleware,
    reactRouterMiddleware
  ]
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}

const configureStore = isDevelopment ? configureStoreDev : configureStoreProd
export default configureStore

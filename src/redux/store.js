import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'

// logger
const logger = createLogger({})

// Reducer root
const rootReducer = './reducer'

const store = createStore(rootReducer, applyMiddleware(logger, promiseMiddleware))

export default store

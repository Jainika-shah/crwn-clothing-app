import { compose, applyMiddleware } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

// ------------------ my logger middleware ----------------------
// concept of currying - below is a chained currying function.
// const myLogger = (store) => (next) => (action) =>{
//     // the code that our middleware should do-
    
//     if(!action.type) return next(action) // when type is not passed

//     console.log('type: ', action.type)
//     console.log('payload: ', action.payload)
//     console.log('currentState: ', store.getState())
//     next(action)
//     console.log('nextState: ', store.getState())
// }
// const middleWares = [myLogger]

const middleWares = [logger]
const composeEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composeEnhancers);


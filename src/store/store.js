import { compose, applyMiddleware } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';


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


const persistConfig = {
    key: 'root',
    storage: storage,
    blackList: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [process.env.NODE_ENV === 'development' &&  logger, thunk].filter(Boolean)

// for redux devTools :
const composeEnhancer = (process.env.NODE_ENV === 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store)


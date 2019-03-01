import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {loadState,saveState} from './localStorage'
//import throttle from 'lodash/throttle';
const persistedState = loadState();
const middleware = applyMiddleware(promise(), thunk);

const store = createStore(reducers,persistedState,middleware);

store.subscribe(()=>{
    saveState(store.getState())
})

export default store;
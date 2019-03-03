import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = applyMiddleware(logger, thunk);

// import {loadState,saveState} from './localStorage'
// //import throttle from 'lodash/throttle';
// const persistedState = loadState();
// const store = createStore(reducers,persistedState,middleware);

export default function configureStore(/*preloadedState*/) {
    const store = createStore(reducers, /*preloadedState,*/ middlewares);
    // store.subscribe(()=>{
    //     saveState(store.getState())
    // })
    return store;

}

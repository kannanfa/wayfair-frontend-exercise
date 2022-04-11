import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {createReducerManager} from 'store/reducerManager';
import { App } from 'modules/App/reducer';
import { Map } from 'immutable';

export function configureStore(initialState = Map()) {
    const reducerManager = createReducerManager({App})
  
    // Create a store with the root reducer function being the one exposed by the manager.
    const store = createStore(reducerManager.reduce, initialState, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) )

  
    // Optional: Put the reducer manager on the store so it is easily accessible
    store.reducerManager = reducerManager

    return store;
  }


export default configureStore();
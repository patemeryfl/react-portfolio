import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers';
import * as Actions from '../actions';

export function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose (applyMiddleware(reduxThunk))
    );

    store.dispatch(Actions.verifyAuth());
    
    return store;
}
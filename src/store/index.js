import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';

import appReducers from './reducers';

// Configure redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Create store with middleware
const store = createStore( appReducers, composeEnhancers(
    applyMiddleware( promiseMiddleware )
));

export default store;
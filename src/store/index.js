import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sages';
import topicsReducer from './topics/reducer';

const rootReducer = combineReducers({
    topics: topicsReducer, 
});

export const browserHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga, browserHistory);
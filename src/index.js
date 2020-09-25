import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import todoReducer from './store/reducers/todo';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const rootReducer = combineReducers({
    td: todoReducer, router: connectRouter(history)
});
const store = createStore(rootReducer,
    applyMiddleware(thunk, routerMiddleware(history)));
ReactDOM.render(
    <Provider store={store}> <App history={history} /> </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();

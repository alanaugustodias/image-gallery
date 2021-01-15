import {applyMiddleware, createStore} from 'redux';

import {RootReducer} from '@app/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';

export const history = createBrowserHistory();

export const configureStore = (preloadedState?: any) => {
    const middlewares = [thunkMiddleware, routerMiddleware(history)];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(RootReducer(history), preloadedState, composedEnhancers);

    return store;
};

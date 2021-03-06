import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import albumReducer from './albums';
import photoReducer from './photos';
import sessionReducer from './session';
import commentsReducer from './comments';
import usersReducer from './users';
import searchReducer from './search';

const rootReducer = combineReducers({
    session: sessionReducer,
    albums: albumReducer,
    photos: photoReducer,
    comments: commentsReducer,
    searches: searchReducer, 
    users: usersReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;

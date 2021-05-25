import {createStore,applyMiddleware,compose} from 'redux';
import allReducers from '../reducer/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const store = createStore
(allReducers,
    composeEnhancers(applyMiddleware())
    
    );

export default store;
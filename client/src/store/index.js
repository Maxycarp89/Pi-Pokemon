import {createStore,aplplyMiddleware} from 'redux';
import{composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

const store = createStore(
    rootReducer,composeWithDevTools(aplplyMiddleware(thunk))
);


export default store;
import{createStore, combineReducers} from  'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import counterReducer from './reducers/counterReducer';

//import counterReducer from './reducers/counterReducer';

const Reducer = combineReducers({
    counter: counterReducer
})

const store = createStore(Reducer, composeWithDevTools());

export default store;
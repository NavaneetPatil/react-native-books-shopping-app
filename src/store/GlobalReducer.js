
import { combineReducers } from 'redux';
import bookReducer from './BookReducer';

const rootReducer = combineReducers({ 
    br: bookReducer,   
});

export default rootReducer;
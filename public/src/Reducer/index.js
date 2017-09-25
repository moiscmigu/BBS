import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import addNewVoteReducer from './addNewVoteReducer';
import saveCookieReducer from './saveCookie';


export default combineReducers({
    searchReducer,
    addNewVoteReducer,
    saveCookieReducer
    
});
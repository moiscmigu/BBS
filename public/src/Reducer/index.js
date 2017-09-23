import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import addNewVoteReducer from './addNewVoteReducer';


export default combineReducers({
    searchReducer,
    addNewVoteReducer
    
});
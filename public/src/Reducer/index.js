import { combineReducers } from 'redux';

import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import newBookReducer from './newBookReducer';
import editBookReducer from './editBookReducer';



export default combineReducers({
    registerReducer,
    loginReducer,
    newBookReducer,
    editBookReducer
});
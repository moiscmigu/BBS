import { combineReducers } from 'redux';

import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import newBookReducer from './newBookReducer'


export default combineReducers({
    registerReducer,
    loginReducer,
    newBookReducer
});
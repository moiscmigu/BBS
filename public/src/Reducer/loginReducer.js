import {LOGIN} from '../Constants';


const loginReducer = (state={}, action) => { 
    switch(action.type) {
        case LOGIN: 
            console.log('in the reducer with the aaction', action)
            return state;
        default: 
            return state;
    }//end of switch


};//end of poleIndexReducer

export default loginReducer;
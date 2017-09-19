import dateDiff from 'date-diff';
import moment from 'moment';
import {bake_cookie, read_cookie} from 'sfcookies';




const userSearchReducer = (state=[], action) => {
    
    switch (action.type) {
        case 'VOTE_SEARCH':
            
            state = [...state, action.text];

            return state;

        
        default:
            return state;

    } //end of switch statement
}//end of userSearchReducer

export default userSearchReducer;
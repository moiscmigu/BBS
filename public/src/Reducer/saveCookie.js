import {bake_cookie, read_cookie} from 'sfcookies';


const saveCookieReducer = (state=[], action) => {
    let userCookieData;
    state = read_cookie('userSavedVote');
    switch (action.type) {
        case 'SAVE_TO_COOKIE':
            
            let token = action.arr.token

            userCookieData = [...state, {contains:token}]
            bake_cookie('userSavedVote', userCookieData);

            return state;
        default:
            return state;

    } //end of switch statement
}//end of userSearchReducer

export default saveCookieReducer;
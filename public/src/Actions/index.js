import axios from 'axios';

export const userSearchAction = (text) => {
    const request = axios.get('/votes/' + text, {search:text});
    return (dispatch) => {
        request.then(data => {
            dispatch({type:"VOTE_SEARCH", payload:data});
        });
    };
};//end of assTOList

export const sendUserVoteAction = (vote, card) => {
    const request = axios.put('/votes',  {vote, card});
    return (dispatch) => {
        request.then(data => {
            dispatch({type:"NOTHING_YET", payload:data});
        });
    };
};//end of assTOList

export const saveUserCookieAction = (arr, card) => {
    let action = {
        type:"SAVE_TO_COOKIE",
        arr, 
        card
    }
    
    return action;
};//end of assTOList




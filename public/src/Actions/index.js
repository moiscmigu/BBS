import axios from 'axios';

export const userSearchAction = (text) => {
    const request = axios.get('/votes/' + text, {search:text});
    return (dispatch) => {
        request.then(data => {
            dispatch({type:"VOTE_SEARCH", payload:data});
        });
    };
};//end of assTOList




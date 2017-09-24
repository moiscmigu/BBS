import axios from 'axios';

export const userSearchAction = (text) => {
    const request = axios.get('/votes/' + text, {search:text});
    return (dispatch) => {
        request.then(data => {
            dispatch({type:"VOTE_SEARCH", payload:data});
        });
    };
};//end of assTOList

export const sendUserVoteAction = (vote) => {
    console.log('this is the vote', vote);
    const request = axios.put('/votes',  {card:vote});
    return (dispatch) => {
        request.then(data => {
            console.log('back from the server with', data)
            dispatch({type:"NOTHING_YET", payload:data});
        });
    };
};//end of assTOList




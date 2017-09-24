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
    console.log('this is the vote', vote);
    console.log('this is the card in the action', card)
    const request = axios.put('/votes',  {vote, card});
    return (dispatch) => {
        request.then(data => {
            console.log('back from the server with', data)
            dispatch({type:"NOTHING_YET", payload:data});
        });
    };
};//end of assTOList




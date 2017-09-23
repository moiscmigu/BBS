export const userSearchAction = (text) => {
    const action = {
        type: "VOTE_SEARCH",
        text
    };//end of action

    return action;
};//end of assTOList

export const newVoteAction = (voteOption) => {

    const action = {
        type: "ADD_NEW_VOTE",
        payload:voteOption
    };//end of action

    return action;
};//end of assTOList




const addNewVoteReducer = (state=[], action) => {
    let newVote;
    
    switch (action.type) {
        case 'ADD_NEW_VOTE':

            let newVoteTitle = action.payload.title;
            let newVoteText = action.payload.numOfVotes;

            state = [...state, {newVoteTitle:newVoteText}]
            return state;   
        default:
            return state;

    } //end of switch statement
};//end of userSearchReducer

export default addNewVoteReducer;
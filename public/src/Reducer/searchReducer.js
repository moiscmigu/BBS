






const userSearchReducer = (state=[], action) => {
    
    switch (action.type) {
        case 'VOTE_SEARCH':
            let data = action.payload.data;
            state = [...state, {voteSearched:data}];
            console.log('this is the state that i am returning', state)       
            return state;   
               
        default:
            return state;

    } //end of switch statement
}//end of userSearchReducer

export default userSearchReducer;
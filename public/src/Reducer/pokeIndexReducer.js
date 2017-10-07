


const pokeIndexReducer = (state=[], action) => { 
    console.log('in the reducer');
    switch(action.type) {
        case "POKEINDEX": 
            console.log('this is the action', JSON.parse(action.payload.data.body));
            return state;
        default: 
            return state;
    }//end of switch


};//end of poleIndexReducer

export default pokeIndexReducer;
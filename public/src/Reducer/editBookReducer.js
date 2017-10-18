import axios from 'axios';


const editBookReducer = (state=[], action) => { 
    switch(action.type) {
        case "EDITBOOK": 
            let bookData = action.payload;
            state = [...state, {data:bookData}];
            return state;
        default: 
            return state;
    }//end of switch


};//end of poleIndexReducer

export default editBookReducer;
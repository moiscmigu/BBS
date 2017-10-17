import axios from 'axios';


//will finish updating the database for users new book



const newBookReducer = (state=[], action) => { 
    switch(action.type) {
        case "NEWBOOK": 
            console.log('in the reducer with the data', action.payload.data);
            
            return state;
        default: 
            return state;
    }//end of switch


};//end of poleIndexReducer

export default newBookReducer;
import {LOGIN} from '../Constants';


const loginReducer = (state=[], action) => { 

    switch(action.type) {
        case "LOGIN": 
            let access = action.payload.data;
            
            if(access === true){
                window.location = "/?#/user";
            } else {
                swal(
                    'Login error',
                    '',
                    'error'
                  );
            }
            return state;
        default: 
            return state;
    }//end of switch


};//end of poleIndexReducer

export default loginReducer;
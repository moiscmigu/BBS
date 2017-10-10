import {LOGIN} from '../Constants';


const registerReducer = (state=[], action) => { 
    let registration;
    switch(action.type) {
        case "REGISTER": 
            console.log('action', action.payload)
            let status = action.payload.data;
            if (status === 'OK') {
                console.log('registering succesful');
                swal("Registration Complete", " ", "success");
            } else {
                swal("Registration error", "The email already exist", "error");
            }
            registration = [...state, {status:'OK'}]
            return registration;
        default: 
            return state;
    }//end of switch


};//end of poleIndexReducer

export default registerReducer;
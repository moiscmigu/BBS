import {LOGIN} from '../Constants';


const registerReducer = (state=[], action) => { 
    let registration;
    switch(action.type) {
        case "REGISTER": 
            let status = action.payload.data;
            if (status === 'OK') {
                console.log('registering succesful');
                swal("Registration Complete", " ", "success");
            } else {
                console.log('Not succesful');
            }
            registration = [...state, {status:'OK'}]
            return registration;
        default: 
            return state;
    }//end of switch


};//end of poleIndexReducer

export default registerReducer;
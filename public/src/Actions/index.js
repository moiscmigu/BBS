import axios from 'axios';


export const loginAction = (creds) => {
    
    let request = axios.post('/register', creds);

    return (dispatch) => {
        request.then(data => {
            console.log('Back from the server with:', data)
            dispatch({type:"LOGIN", payload:data});
        });
    };


};//
import axios from 'axios';


export const registerAction = (creds) => {
    let request = axios.post('/register', creds);

    return (dispatch) => {
        request.then(data => {
            dispatch({type:"REGISTER", payload:data});
        });
    };


};//

export const loginAction = (creds) => {
    
    let request = axios.post('/login', creds);

    return (dispatch) => {
        request.then(data => {
            dispatch({type:"LOGIN", payload:data});
        });
    };


};//
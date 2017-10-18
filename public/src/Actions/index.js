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

export const startNewBookAction = (book, user) => {
    
    let request = axios.post('/newBook', {book, user});

    return (dispatch) => {
        request.then(data => {

            dispatch({type:"NEWBOOK", payload:data});
        });
    };
};//

export const editBookAction = (book, user) => {
    
    return {
        type:"EDITBOOK",
        payload:{book, user}
    };//end of return
};//
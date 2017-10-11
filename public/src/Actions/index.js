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

export const startNewBookAction = (book) => {
    
    console.log('startNew Boo action with the book', book);
    let request = axios.post('/newBook', {book});

    return (dispatch) => {
        request.then(data => {

            console.log('back from the server with', data);
            dispatch({type:"NEWBOOK", payload:data});
        });
    };


};//
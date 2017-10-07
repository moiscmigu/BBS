import axios from 'axios';
import {POKEINDEX} from '../Constants';

export const pokeIndexAction = () => {
    
    let request = axios.get('/pokeIndex');

    return (dispatch) => {
        request.then(data => {
            console.log('back with the index of', data)
            dispatch({type:POKEINDEX, payload:data});
        });
    };


};//
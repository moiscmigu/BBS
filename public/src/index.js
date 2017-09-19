import React from 'react';
import ReactDOM from 'react-dom';
import SearchVote from './Components/SearchVote.jsx'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducer from './Reducer';

const store = createStore(Reducer);



 

ReactDOM.render(
    <Provider store = {store}>
        <SearchVote/>
    </Provider>
    ,document.getElementById('root')); 
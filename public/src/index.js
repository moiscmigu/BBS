import React from 'react';
import ReactDOM from 'react-dom';
import SearchVote from './Components/SearchVote.jsx';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducer from './Reducer';
import VotingElements from './Components/VotingElements.jsx';

const store = createStore(Reducer);



 

ReactDOM.render(
    <Provider store = {store}>
        <div className='container'>
            <SearchVote/>
        </div>
    </Provider>
    ,document.getElementById('root')); 
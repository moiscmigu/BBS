import React from 'react';
import ReactDOM from 'react-dom';
import SearchVote from './Components/SearchVote.jsx';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducer from './Reducer/';
import NewVote from './Components/NewVote.jsx';

const store = createStore(Reducer);



 

ReactDOM.render(
    <Provider store = {store}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <SearchVote/>
                </div>
                <div className='col-md-3'>
                    <NewVote/>
                </div>
            </div>
            
            
        </div>
    </Provider>
    ,document.getElementById('root')); 
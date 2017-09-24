import React from 'react';
import ReactDOM from 'react-dom';
import SearchVote from './Components/SearchVote.jsx';
import NewVote from './Components/NewVote.jsx';
import ShowVotes from './Components/ShowVotes.jsx';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducer from './Reducer/';





const store = createStore(Reducer, applyMiddleware(thunk));


 

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
            <div className='row'>
                <div className='col-md-12'>
                    <ShowVotes/>
                </div>
                
            </div>
            
            
        </div>
    </Provider>
    ,document.getElementById('root')); 
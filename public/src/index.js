import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducer from './Reducer/';
import {HashRouter as Router, Route, Redirect} from 'react-router-dom';

import Login from './Components/login.jsx';
import User from './Components/User.jsx';
import Book from './Components/Book.jsx';








const store = createStore(Reducer, applyMiddleware(thunk));


 

ReactDOM.render(
    
    <Provider store={store}>
        <Router>
            <div>             
                <Route path='/' component={Login} exact />
                <Route path='/user' component={User}/>
                <Route path='/book' component={Book}/>
                
            </div>
        </Router>
    </Provider>
    

    ,document.getElementById('root')); 
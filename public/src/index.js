import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.jsx'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducer from './Reducer';

const store = createStore(Reducer);



 

ReactDOM.render(<App/>,document.getElementById('root')) 
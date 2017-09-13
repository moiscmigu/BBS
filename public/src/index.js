import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.jsx'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducer from './Reducer';
var TicTacToe = require('react-tic-tac-toe');

const store = createStore(Reducer);



 

ReactDOM.render(<TicTacToe width={ 3 } singlePlayer />,document.getElementById('root')) 
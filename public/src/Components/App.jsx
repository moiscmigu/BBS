import React from 'react';
import {addToList, removeFromList, deleteAllTask} from '../Actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import Box from './ColorBox.jsx';
import styled from 'styled-components';
import SmartCSS from 'smart-css';



var css = new SmartCSS();

css.setClass('.button', {
    "background-color": 'red'
});


css.setClass('.root', {
    height: "20em",
    width:"20em",
    "background-color": 'red'
})

class App extends React.Component {


    render() {
        
        return (
          <div className = {css.getClass('root')}>

          </div>
        );
    }//end of render

}//end of App




export default App;
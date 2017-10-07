import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {pokeIndexAction} from '../Actions/index';
import {Link} from 'react-router-dom';
import Header from './Header.jsx';


class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }//end of constructor

    

   
    render() { 
        return (
            <h1>The User</h1>


            
        );
    }//end of render


}//end of classNameName


export default User;
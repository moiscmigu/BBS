import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {pokeIndexAction} from '../Actions/index';
import {Link} from 'react-router-dom';
import Header from './Header.jsx';
import axios from 'axios';



class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            style:{
                backgroundColor:'red'
            }
        };
    }//end of constructor

    
    componentWillMount() {
        console.log('mounting...');
        axios.get('/login').then(res => {
            console.log('geting the users information', res);
            let userInfo = res.data;
            if(userInfo === '' || userInfo === ' ' || userInfo === false) {
                window.location = "/?#/";
            } else {
                this.state = {
                    theUser: userInfo
                };
            }

        });
    }//end of component will mount

    handleRandom() {
        console.log('clciked');
        console.log('The state', this.state)
    }//end of handle random

   
    render() { 
        return (
            <div>
                <Header />
                <Link to='/'>Back to </Link>
                <button onClick={this.handleRandom.bind(this)}>Hello</button>
            </div>
            


            
        );
    }//end of render


}//end of classNameName


export default User;
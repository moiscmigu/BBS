import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {startNewBook} from '../Actions/index';
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
        //GETS USER INFORMATION AND AUTHENTICATES USER
        axios.get('/login').then(res => {
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



    

   
    render() { 
        return (
            <div>
                <Header />
               
            </div>
            


            
        );
    }//end of render


}//end of classNameName


export default User;
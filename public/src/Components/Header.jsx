import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {pokeIndexAction} from '../Actions/index';
import {Link} from 'react-router-dom';
import axios from 'axios';



class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }//end of constructor

    handleNewBook() {
        console.log('starting a new book...')
    }//handleNewBook


    handleLogout() {
        console.log('loging out..');
        axios.delete('/login').then(res => {
            console.log('back from the server with', res);
            window.location = "/?#/";
        })
    }

   
    render() { 
        return (
            <div id="UserHeader">
                <header className="main-header">
                    <div className="logo"><a href="index.html" >BBS</a></div>
                    <div className="navbar navbar-static-top">
                    <div className="btn-grps pull-right">
                        <a className="pink-btn dark-btn"  onClick={this.handleLogout.bind(this)}  >Logout</a>
                        <a  className="pink-btn" onClick={this.handleNewBook.bind(this)}>New Book</a>
                    </div>
                    </div>

                </header>
            </div>

        );
    }//end of render


}//end of classNameName


export default Header;
import React from 'react';
import {startNewBookAction} from '../Actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Link} from 'react-router-dom';
import axios from 'axios';
import {bibleBooks} from '../../data/bibleBooks';



class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            book:"Genesis"
        };
    }//end of constructor

    handleNewBook() {
        let userBook = this.state.book;
        console.log('The book chosen by the user', this);
        this.props.startNewBookAction(userBook, this.state.theUser);


    }//handleNewBook


    handleLogout() {
        console.log('loging out..');
        axios.delete('/login').then(res => {
            console.log('back from the server with', res);
            window.location = "/?#/";
        })
    }//end of handleLogout

    showBibleBooks() {
        //displays the option tag for every book in the bible
        let books = bibleBooks;
        return(
                
                    books.map((b, id) => {
                        return (
                            <option value={b} key={id}>{b}</option>
                        );
                    })
        );//end of return
    }//end og showBibleBooks

    start() {
        console.log('start', this)
    }//end of start

    componentWillMount() {
        //GETS USER INFORMATION AND AUTHENTICATES USER
        axios.get('/login').then(res => {
            let userInfo = res.data;
            if(userInfo === "Not Authenticated") {
                window.location = "/?#/";
            } else {
                this.state = {
                    theUser: userInfo
                };
            }
        });//end axios and then
    }//end of componentWillMount

   
    render() { 
        return (
            <div id="UserHeader">
                <header className="main-header">
                    <div className="logo"><a href="index.html" >BBS</a></div>
                    <div className="navbar navbar-static-top">
                    <div className="btn-grps pull-right">
                        <a className="pink-btn dark-btn"  onClick={this.handleLogout.bind(this)}  >Logout</a>
                        <a  className="pink-btn" data-toggle="modal" data-target="#myModal">New Book</a>
                    </div>
                    </div>

                </header>


                <div className="col-md-4 ">           

                    <div id="myModal" className="modal fade" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>

                                </div>
                                <div className="modal-body">
                               
                                    <h4 className="modal-title" >New Book</h4>
                                    <label htmlFor="book">Book:</label>
                                    <select name="book"  id="" onChange={event => this.setState({book:event.target.value})}>
                                        {this.showBibleBooks()}                   
                                    </select>
                                    <input type="button" value="Start0" onClick={this.start.bind(this)}/>
                                
                                
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className='btn btn-success'  data-dismiss="modal" id="signupSubmit" onClick={this.handleNewBook.bind(this)}> Enter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }//end of render


}//end of classNameName


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        startNewBookAction
        
    },
     dispatch)
}

function mapStateToProps(state) {
    return {
        newBook:state
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Header);
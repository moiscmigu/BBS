import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {pokeIndexAction} from '../Actions/index';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {bibleBooks} from '../../data/bibleBooks';



class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            book:String
        };
    }//end of constructor

    handleNewBook() {
        console.log('starting a new book...')
    }//handleNewBook


    handleLogout() {
        console.log('loging out..');
        axios.delete('/login').then(res => {
            console.log('back from the server with', res);
            window.location = "/?#/user";
        })
    }//end of handleLogout

    showBibleBooks() {
        console.log('showing the books');
        let books = bibleBooks;
        console.log(books);

        return(
                
                    books.map((b, id) => {
                        return (
                            <option value={b} key={id}>{b}</option>
                        );
                    })
                
        );


    }//end og showBibleBooks

   
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
                                <h4 className="modal-title" >New Book</h4>
                                <label htmlFor="book">Book:</label>
                                <select name="book"  id="" onChange={event => this.setState({book:event.target.value})}>
                                    {this.showBibleBooks()}                   
                                </select>

                            </div>
                            <div className="modal-body">
                            



                                
                            </div>
                            <div className="modal-footer">
                                <button type="button" className='btn btn-success'  data-dismiss="modal" id="signupSubmit" > Submit</button>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            </div>

        );
    }//end of render


}//end of classNameName


export default Header;
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {editBookAction} from '../Actions/index';
import {Link} from 'react-router-dom';
import Header from './Header.jsx';
import axios from 'axios';




class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            style:{
                books:false,
                user:Object
            }
        };
    }//end of constructor

    componentWillMount() {
        //GETS USER INFORMATION AND AUTHENTICATES USER
        axios.get('/login').then(res => {
            let userInfo = res.data;
            if(userInfo === "Not Authenticated") {
                window.location = "/?#/";
            } else {
                axios.get('/newBook').then(response => {
                    this.setState({
                        books:response.data,
                        user:userInfo
                    });
                    
                });//end of axios GET
            }
        });//end of axios GET
    }//end of component will mount

    
    showBooks() {
            let books = this.state.books;
            
            
            if(books === undefined) {
                return false;
            }
            else {
                return (
                    books.map((book, id) => {
                        let progess = Math.round(book.bookProgress/book.length*100)
                        return (
                            <div className="card" style={{"width": "20rem", 'display': 'inline-block', 'margin': '2em'}} key={id}>
                                <div className="card-block">
                                    <h1 className="card-title bookAbb" >{book.abb}</h1>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <label htmlFor="progess">{progess}% Completed</label>
                                <div className="progress" name='progess'>
                                    <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                    aria-valuemin="0" aria-valuemax="100" style={{"width": progess+"%"}}>
                                        <h5 className="sr-only">10% Complete</h5>
                                    </div>
                                </div>
                                <div className="card-block">
                                    <Link to="/Book" className="card-link" onClick={() => this.editBook(book)}>Study</Link>
                                </div>
                          </div>
                        )//end of return
                    })//end of map
                );//end of return
            }//end of else
    }//end showBooks
    
    editBook(book) {
        let user = this.state.user
        this.props.editBookAction(book, user)


    }//end editBook
    
   
    render() { 
        
        if(this.state.books === false) {
            return false
        }
        else {

            return (
                <div>
                    <Header/>
                    <div className="container">
                    <div className='row'>
                            <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="progress" name='allBooks'>
                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                                aria-valuemin="0" aria-valuemax="100" style={{"width":"40%"}}>
                                    40% Of All Books Completed
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                {this.showBooks()}
                            </div>
                        </div>
                    </div>
                </div>
            )//end of return
        }//end of else statement
        


            
    }//end of render


}//end of classNameName


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        editBookAction
    },
     dispatch)
}

function mapStateToProps(state) {
    return {
        book:state
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(User);
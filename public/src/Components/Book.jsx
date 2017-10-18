import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import Header from './Header.jsx';
import axios from 'axios';


class Book extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            book:Object,
            user:Object
        };//end of state

    }//end of constructor


    start() {
        console.log('state', this.state)
    }//end start

    componentWillMount() {
        //Always gettting the last book out of the array
        

        //AUTHENTICATES THE USER
        axios.get('/login').then(res => {
            let userInfo = res.data;
            if(userInfo === "Not Authenticated") {
                window.location = "/?#/";
            } 
        });//end of axios GET

        //GETS THE CORRECT BOOK FROM THE REDUCER
        if(this.props.book.editBookReducer.length - 1 === -1) {
            window.location = "/?#/user";
        }
        else {
            let lastBook = this.props.book.editBookReducer.length -1;
            let book = this.props.book.editBookReducer[lastBook].data.book;
            let user = this.props.book.editBookReducer[lastBook].data.user;
            this.setState({book, user});
        }
    }//end componentWillMount


    render() {
        return (
            <div>
            <Header/>
                <div className="container">
                    <h1>Book</h1>
                    <button onClick={this.start.bind(this)} >start</button>
                </div>
            </div>
        );
    }
}//end class Book


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        
    },
     dispatch)
}

function mapStateToProps(state) {
    return {
        book:state
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Book);

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
            user:Object,
            chapters:[],
            chapterCount:0,
            ready:false
        };//end of state

    }//end of constructor


    showChapters() {
        let chapterCount = this.state.chapterCount;
        let chapters = this.state.book.length;
        let chatpersArr = this.state.chapters;

        
        for(let i = 0; i < chapters; i++) {
            chatpersArr.push([])
        }
        
        
        return (
            chatpersArr.map((ch, id) => {
                chapterCount++;
                return (
                    <p key={id}>{this.state.book.book} Chapter:{chapterCount}</p>
                );
            })
        )
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
            this.setState({book, user, ready:true});
        }
    }//end componentWillMount


    render() {

        if(!this.state.ready){
            return false;
        }
        else {
            return (
                <div>
                <Header/>
                    <div className="container">
                        <div className="row" style={{"textAlign": "center"}}>
                            <div className="col-md-12">
                                <h1>{this.state.book.book}</h1>
                            </div>
                        </div>
                        <div className="row" style={{"textAlign": "center"}}>
                            <div className="col-md-6">
                                {this.showChapters()}
                            </div>
                            <div className="col-md-6">
                                <textarea name="" id="" cols="50" rows="60"></textarea>
                            </div>
                        </div>
                        
                    </div>
                </div>
            );
        }

        
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

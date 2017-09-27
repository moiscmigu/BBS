import React from 'react';
import {userSearchAction,sendUserVoteAction, saveUserCookieAction } from '../Actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import swal from 'bootstrap-sweetalert';
import {bake_cookie, read_cookie} from 'sfcookies';
import moment from 'moment';

class ShowVotes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }//end of contructor


    //sends vote to the db and saves vote to cookie
    handleLike(arr, card) {

        let showVotes = Boolean;
        let checkVotesArr = this.props.voteSearched.saveCookieReducer;
        let counterLimit = 0;
        let currentDate = new Date();

        //checks to see if user has already voted;
        checkVotesArr.forEach(function(element) {
            if(element.contains.includes(arr.token)) {
                counterLimit++;
            } else {
            }
            return counterLimit;
         });
       
        if( counterLimit !== 0) {
            swal(
                'Vote Limit Reached',
                '',
                'warning'
              )
              
            return false;
        } else if(currentDate >= new Date(arr.expDate)) {

            swal(
                'Vote Session Closed',
                '',
                'error'
              );
        } else {

            let addVote = arr.votes[card];

            addVote.like++

            //sends vote to the db
            this.props.sendUserVoteAction(arr, card);

            //saves vote to cookie
            this.props.saveUserCookieAction(arr, card);

            return addVote;
        }
        
    }//end of handleLike

    showCategories() {
        let data = this.props.voteSearched.searchReducer;
        data =  data[data.length -1].voteSearched;
        if(this.props.voteSearched.searchReducer.length === 0) {
            return false; 
        } else {
            return (
                <div className='showVotes'>
                    {
                        data.map((v, id) => {
                            return (
                                <div className='showVotes' key={id}  >
                                    <h1 >{v.title}</h1>
                                    <h4><em>Expired: {moment(v.expDate).fromNow()}</em></h4>
                                    {
                                     v.votes.map((card, cardId) => {
                                    return (
                                        <div className="card" key={cardId}>
                                            <div className="card-block">
                                                <h1>{card.vote}</h1>
                                                <button className='btn btn-warning' onClick={() => this.handleLike(v, cardId)} >Votes: {card.like}</button>
                                            </div>
                                      </div>
                                    )
                                })
                            }
                                </div>
                            )  
                        })
                    }
                </div>
            );//end of return
        }
        
    }//ennd of showCategories


    render() {

        

        if(this.props.voteSearched.searchReducer.length === 0 ) {
            return false;
        } else {
            return(
                <div>
                    {this.showCategories()}
                    

                    
                </div>
            );//end of return
        }
        
    }//end of render
}//end of app


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        userSearchAction,
        sendUserVoteAction,
        saveUserCookieAction
    },
     dispatch)
}

function mapStateToProps(state) {
    return {
        voteSearched:state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowVotes);
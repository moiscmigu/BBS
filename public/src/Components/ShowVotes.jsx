import React from 'react';
import {userSearchAction,sendUserVoteAction, saveUserCookieAction } from '../Actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import swal from 'bootstrap-sweetalert';
import {bake_cookie, read_cookie} from 'sfcookies';
import cookie from 'react-cookies';

//GLOBALS
let limitArr = [];

class ShowVotes extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            voteCounter:0
        };//end of this state

    }//end of contructor


    handleLike(arr, card) {
        
        
        
        let showVotes = Boolean;
        let checkVotesArr = this.props.voteSearched.saveCookieReducer;
        let counter = 0;
        




        checkVotesArr.forEach(function(element) {
           

            if(element.contains.includes(arr.token)) {
                console.log('this is inclided')
                counter++;
            } else {
                console.log('nothing found')
            }
            return counter;
         });

        console.log('this will determina if the function runs or not', counter)




        
       
        if( counter !== 0) {
            swal(
                'Vote Limit Reached',
                '',
                'warning'
              )
            return false;
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
                <div>
                    {
                        data.map((v, id) => {

                            {
                                return v.votes.map((card, cardId) => {

                                    return (
                                        <div className="card" >
                                            <div className="card-block">
                                                <h1>{card.vote}</h1>
                                                <button className='btn btn-warning' onClick={() => this.handleLike(v, cardId)} >Votes: {card.like}</button>
                                            </div>
                                      </div>
                                        
                                    )
                                })
                            }
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
                    <h1>{this.props.voteSearched.searchReducer[0].voteSearched[0].title}</h1>
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
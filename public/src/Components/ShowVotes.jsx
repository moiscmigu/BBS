import React from 'react';
import {userSearchAction,sendUserVoteAction } from '../Actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import swal from 'bootstrap-sweetalert';







class ShowVotes extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            voteCounter:0
        };//end of this state

    }//end of contructor

    start() {

    }//end of start

    handleLike(arr, card) {
        if(this.state.voteCounter !== 0 ) {
            swal(
                'Vote Limit Reached',
                '',
                'warning'
              )
            return false;
        } else {

            let addVote = arr.votes[card];

            addVote.like++

            this.props.sendUserVoteAction(arr);
            this.setState({voteCounter:1});
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
                    {this.start()}
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
        sendUserVoteAction
    },
     dispatch)
}

function mapStateToProps(state) {
    return {
        voteSearched:state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowVotes);
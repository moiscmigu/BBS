import React from 'react';
import {userSearchAction} from '../Actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import swal from 'bootstrap-sweetalert';







class ShowVotes extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        };//end of this state

    }//end of contructor

    start() {
        console.log('startingg...', this.props.voteSearched.searchReducer);

      
    }//end of start

    showCategories() {
        let data = this.props.voteSearched.searchReducer;
        let voteCards =  data[data.length -1].voteSearched[0].votes


        if(this.props.voteSearched.searchReducer.length === 0) {
            return false; 
        } else {
            return (
                <div className="card text-right" >
                    {
                        voteCards.map((card, id) => {
                            console.log('in the loop', card)
                            return (
                                <div className="card-block" key={id}>
                                    <h4 className="card-title">{card.vote}</h4>

                                    <button className="btn btn-warning">Likes: {card.like}</button>
                                </div>
                            );
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
        userSearchAction
    },
     dispatch)
}

function mapStateToProps(state) {
    return {
        voteSearched:state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowVotes);
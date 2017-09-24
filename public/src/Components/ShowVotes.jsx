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
        let data = this.props.voteSearched.searchReducer

        if(this.props.voteSearched.searchReducer.length === 0) {
            return false; 
        } else {
            return (
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-block">

                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
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
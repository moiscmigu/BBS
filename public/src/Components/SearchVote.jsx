import React from 'react';
import {userSearch} from '../Actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';







class SearchVote extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userVoteAccessToken:''
        };//end of this state


    }//end of contructor

    handleVoteSearch() {
        console.log('this is the vote the user searched for', this)
        this.props.userSearch(this.state.userVoteAccessToken)
    }//end of handleVoteSearch


    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h1>Search For Votes</h1>
                    </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-md-offset-3">
                    <form  action='' className="search-form" id='voteSearchInput' onSubmit={this.handleVoteSearch.bind(this)}>
                        <div className="form-group has-feedback">
                            
                            <input 
                            type="text" 
                            className="form-control" 
                            name="search" id="search" 
                            placeholder="Enter access token"
                            onChange = {event => this.setState({userVoteAccessToken:event.target.value})}
                            />
                            <span className="glyphicon glyphicon-search form-control-feedback"  ></span>
                        </div>
                    </form>
                </div>
                <div className="col-md-4 ">
                <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
                

                <div id="myModal" className="modal fade" role="dialog">
                  <div className="modal-dialog">
                

                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Modal Header</h4>
                      </div>
                      <div className="modal-body">
                        <p>Some text in the modal.</p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                
                  </div>
                </div>
                </div>
                </div>
        </div>
        );//end of return
    }//end of render
}//end of app


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        userSearch
    },
     dispatch)
}

function mapStateToProps(state) {
    return {
        search:state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchVote);
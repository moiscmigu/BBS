import React from 'react';
import {userSearch} from '../Actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import swal from 'bootstrap-sweetalert';







class SearchVote extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userVoteAccessToken:'',
            vote:{},
            handleCardNum:''

        };//end of this state


    }//end of contructor

    handleVoteSearch() {

        this.props.userSearch(this.state.userVoteAccessToken)
    }//end of handleVoteSearch

    handleCategory() {  
        //changess state
        console.log('clicked', this.state);



    }//end of handleCategoryr

    NumberOfVoteCards() {
        let num = []

        for (var i=0; i < Number(this.state.handleCardNum) + 1; i++) {
            num.push(i);
        }

        //handles how many card blocks should be displayed
        if(num.length === 0) {
            return false;

        }else {

            return(  
                <div>
                    {
                        num.map((card, id) => {
                            return (
                                <div className="card-block" key={id}>
                                    <input id={id}  type="text" onChange={event => {this.value = event.target.value}}  onClick={this.handleVal(document.getElementById(id))}  />
                                </div>
                            );
                        })
                    }
                </div>
            ); 
        }

               
       

     

    }//end of handleCardBlock

    handleVal(id) {
        console.log('handle vbal', id)
    }


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

                    {/* <input className="btn btn-primary" type="button" value="Start New Vote" data-toggle="modal" data-target="#myModal" onClick={this.setState({voteCategory:prompt('Category Type?')})} /> */}
                    <button className="btn btn-primary" type="submit" data-toggle="modal" data-target="#myModal" >Start New Vote</button>

                    <div id="myModal" className="modal fade" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title" >Start New Vote</h4>
                                </div>
                                <div className="modal-body">

                                <div className="card" >
                                    <input type='text' onChange={event => this.setState({vote:{...this.state.vote, title:event.target.value}})} placeholder='Title'/>        
                                    <input type='text' onChange={event => this.setState({vote:{...this.state.vote, voteNum:Number(event.target.value)}})} placeholder='number'/>        
                                    <input type='text' onChange={event => this.setState({vote:{...this.state.vote, why:event.target.value}})} placeholder='number'/>        
                                    <button onClick={this.handleCategory.bind(this)} >Enter</button>
                                </div>

                                   
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
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
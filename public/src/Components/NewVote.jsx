import React from 'react';
import {newVoteAction} from '../Actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';







class NewVote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title:String,
            numOfVotes:0
        };//end of state

    }//end of constructo]

    addNewVote() {  
        
        console.log('input with the right name', document.getElementsByName('voteInput')[0].value)
        


    }//end of addNewVote

    displayNumOfVotes() {
      
        let arr = [];

        for(let v = 0; v < this.state.numOfVotes ; v++) {
            arr.push(v);
        }//end of for loop

        if(this.state.numOfVotes === 0) {
            return false;
        } else {


            return(
                <div>
                    {
                        arr.map((i, id) => {
                            return (
                                <div className ='card=block' key={id}>
                                    <input type="text" name='voteInput'  placeholder='Enter A category'/>
                                </div>
                               
                            );
                        }) 
                    }
                </div>
            );
        }


       
    }//end of displayNumOfBotes

    render(){
        return(
            <div className="col-md-4 ">           
                <button className="btn btn-primary" type="submit" data-toggle="modal" data-target="#myModal" >Start New Vote</button>

                <div id="myModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title" >Start New Vote</h4>
                            </div>
                            <div className="modal-body">

                                <input type="text" onChange={event => this.setState({title:event.target.value})}  placeholder='The title' />
                                <input type="number" onChange={event => this.setState({numOfVotes:Number(event.target.value)}) } placeholder='How Many Categories?' />
                                {this.displayNumOfVotes()}
                                <button onClick={this.addNewVote.bind(this)} >Enter</button>
                                
                                
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
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
        newVoteAction
    },
     dispatch)
}

function mapStateToProps(state) {
    return {
        newVote:state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewVote);
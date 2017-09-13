import React from 'react';
import {addToList, removeFromList, deleteAllTask} from '../Actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';

let counter = 0
class Box extends React.Component {

    counter() {
        console.log('this is the counter', counter);
        return counter++;
    }


    render() {
        let counter = 0;

        return (
            <div className='Box-1' data-box={this.counter()} >

                
            </div>
        );//end of return
    }//end of render

}//end of App



// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         addToList,
//         removeFromList,
//         deleteAllTask
//     },
//      dispatch)
// }

// function mapStateToProps(state) {
//     console.log('this is the new state', state)
//     return {
//         reminders:state
//     }
// }


export default Box;
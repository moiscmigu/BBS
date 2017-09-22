import React from 'react';
import {userSearch} from '../Actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';







class Elements extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };//end of state

    }//end of constructo]

    test() {
        console.log('testing', this)
    }//end of test
    
    render(){
        return(
            <div>
                <h1>elemtss</h1>
                {this.test.bind(this)}
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
        Element:state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Elements);
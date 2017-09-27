import React from 'react';
import Box from './Box.jsx'


class Start extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            theBox:[],
            rando:Number
        };


    }//end of constructor

    //startBox when clicked will render an amoutn of boxes on the DOM and start the 'game'
    startBox() {
        //eventually this will determain how many boxes are displayed on the DOM
        let randoBox = Math.floor(Math.random() * 100);
        let boxArr = [];

        this.setState({rando:randoBox});

        //loop will enter <Box/> into an array

        for(let b = 0; b < randoBox; b++) {
            boxArr.push(<Box/>)
        }//end of loop  
        
        this.setState({theBox:boxArr});


    }//end of startBox

    //this will display the boxes
    showBox() {

        let boxi = this.state.theBox;

        return (
            <div>
                {
                    boxi.map((box, id) => {
                        return (
                            <div key={id}>
                                {box}
                            </div>
                        )
                    })
                }
            </div>
        );
    }//end of showBOx

    render() {
        return(
            <div className='container'>
                
                <div className='row'>
                    <div className='col-md-12'>
                    <button className='btn btn-success'  onClick={this.startBox.bind(this)} >Start</button>
                  </div>  
                </div>

                <div className='row'>
                    <div className='col-md-12'>
                            {this.showBox()}
                    </div>  
                </div>
            </div>
            
        );
    }//end of render

}//end of class Start



export default Start; 
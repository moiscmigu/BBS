import React from 'react';
import Box from './Box.jsx'



class Start extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            theBox:[],
            rando:Number,
            boxArrIndex:0,
            boxStyle: {
                'marginTop':'3em',
                'height':'15em',
                'width':'15em',
                'backgroundColor': "green"
            },
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
        
        this.showBox()

    
    }//end of startBox


    //this will display the boxes
    showBox() {
        let boxi = this.state.theBox;



            return (
            <div className="inline">
                {
                    boxi.map((box, id) => {
                        return (
                            <div key={id} className="inline">
                                {box}
                            </div>
                        )
                    })
                }
            </div>
        );

        
    }//end of showBOx

    componentDidMount() {

        setInterval(this.startBox.bind(this), 3000)
    }

    render() {

        

        return(
            <div className='container'>
                {this.showBox()}
            </div>
            
        );
    }//end of render

}//end of class Start



export default Start; 
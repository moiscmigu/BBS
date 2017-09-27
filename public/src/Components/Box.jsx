import React from 'react';


class Box extends React.Component {

    constructor(props){
        super(props);

      
    }//end of construcor

    //funciotn chooses random colors
    randoColor() {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let color = "rgba(" + r + "," + g + "," + b + "," + "5)";


            return color;
        }//end of randoColor


    componentWillMount() {
        console.log('componentWillMount');

       
        this.state = {
            boxStyle: {
                'marginTop':'3em',
                'height':'15em',
                'width':'15em',
                'backgroundColor': this.randoColor()
            },
        };
    }//enf of component will mount
    
    render() {
        
        return(
            <div style={this.state.boxStyle}> 
                
            </div>
        );
    }//end of render


}//end of Box


export default Box;
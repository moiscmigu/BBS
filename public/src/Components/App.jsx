import React from 'react';
import {addToList, removeFromList, deleteAllTask} from '../Actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';







class App extends React.Component {


    handleBoxClicked(id) {
        console.log('this is the event', id.innerHTML);
        console.log(document.getElementsByName('td-grid'));

        this.display(id)
    }//end of handleBoxClicked

    display(item) {
        console.log('itme', item.attributes[3].nodeValue);


        item.attributes[3].nodeValue = 'x'
        item.innerHTML = 'X';

        this.computer();

        
        return item.innerHTML
    }//end of display

    computer(item) {
        
        let comp = document.getElementsByName('td-grid');


        let rando = Math.round(Math.random() * 1);
        console.log('rando', rando)

        for(let i = 0; i < comp.length; i++){
            

          if(comp[i].attributes[3].nodeValue === 'none'){
            
            if(rando === 1) {
                comp[i].attributes[3].nodeValue = 'O';
                comp[i].innerHTML = "O"
                break;
            } else {
                if(comp[i + 1].attributes[3].nodeValue === 'none') {
                    comp[i ].attributes[3].nodeValue = 'O';
                    comp[i ].innerHTML = "O"
                break;
                }
                
            }
            
          }

        }

    }//end of display

     

    

    render() {
        



        return (
          <div>
              <h1>Tic Tac Toe</h1>
              <table>
                    <tr>
                        <td className="grid" id='td-1-1' name='td-grid' data-status='none' onClick={event => this.handleBoxClicked(document.getElementById('td-1-1'))}>{() => this.display(document.getElementById('td-1-1'))}</td>
                        <td className="grid" id='td-1-2' name='td-grid' data-status='none' onClick={event => this.handleBoxClicked(document.getElementById('td-1-2'))}>{() => this.display(document.getElementById('td-1-2'))}</td>
                        <td className="grid" id='td-1-3' name='td-grid' data-status='none' onClick={event => this.handleBoxClicked(document.getElementById('td-1-3'))}>{() => this.display(document.getElementById('td-1-3'))}</td>
                    </tr>
                    <tr>
                        <td className="grid" id='td-2-1' name='td-grid' data-status='none' onClick={event => this.handleBoxClicked(document.getElementById('td-2-1'))}> {() => this.display(document.getElementById('td-2-1'))}</td>
                        <td className="grid" id='td-2-2' name='td-grid' data-status='none' onClick={event => this.handleBoxClicked(document.getElementById('td-2-2'))}>{() => this.display(document.getElementById('td-2-2'))}</td>
                        <td className="grid" id='td-2-3' name='td-grid' data-status='none' onClick={event => this.handleBoxClicked(document.getElementById('td-2-3'))}>{() => this.display(document.getElementById('td-2-3'))}</td>
                    </tr>
                    <tr>
                        <td className="grid" id='td-3-1' name='td-grid' data-status='none' onClick={event => this.handleBoxClicked(document.getElementById('td-3-1'))}>{() => this.display(document.getElementById('td-3-1'))}</td>
                        <td className="grid" id='td-3-2' name='td-grid' data-status='none' onClick={event => this.handleBoxClicked(document.getElementById('td-3-2'))}>{() => this.display(document.getElementById('td-3-2'))}</td>
                        <td className="grid" id='td-3-3' name='td-grid' data-status='none' onClick={event => this.handleBoxClicked(document.getElementById('td-3-3'))}>{() => this.display(document.getElementById('td-3-3'))}</td>
                    </tr>
                </table>
          </div>
        );
    }//end of render

}//end of App




export default App;
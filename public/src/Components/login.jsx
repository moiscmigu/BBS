import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {pokeIndexAction} from '../Actions/index';
import {Link} from 'react-router-dom';
import Header from './Header.jsx';


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email:String,
            password:String
        };
    }//end of constructor

    handleLogin() {
        console.log('logiing in ...', this.state)
    }

   
    render() { 
        return (
            <div>
            <div className="wrapper dark-header">
            <section className="login-inner">
                <div className="login-middle">
                <div className="login-details">
                    <form onSubmit={this.handleLogin.bind(this)}>
                    <h2>Log In</h2>
                    <label>
                        <input type="text" placeholder="Email address" autoFocus onChange={event => this.setState({email:event.target.value})} />
                    </label>
                    <label>
                        <input type="password" placeholder="Password" onChange={event => this.setState({password:event.target.value})} />
                    </label>
                    <div className="btn-sub">
                        <button className="pink-btn">Log In</button>
                        <span>
                        <Link to="/user"  data-toggle="modal" data-target="#myModal">Signup</Link>
                        </span>
                    </div>

                    </form>
                </div>
                </div>
            </section>

            

            </div>

            <div className="col-md-4 ">           

                <div id="myModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title" >Start New Vote</h4>
                            </div>
                            <div className="modal-body">
                                <h1>Modal</h1>
                                
                            </div>
                            <div className="modal-footer">
                                <button type="button" className='btn btn-success'  data-dismiss="modal" id="signupSubmit"> Submit</button>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            </div>


            
        );
    }//end of render


}//end of classNameName


export default Login;
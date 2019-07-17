import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import axios from 'axios';


class LoginForm extends Component {
 
  constructor() {
    super()
    this.state = {
        username: '',
        password: '',
        redirectTo: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

}

handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit(event) {
    event.preventDefault()
    console.log('handleSubmit')

    axios
        .post('/user/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log('login response: ')
            console.log(response)
            if (response.status === 200) {
                // update App.js state
                // this.props.updateUser({
                //   this.state.updateUser({
                //     loggedIn: true,
                //     username: response.data.username
                // })
                // update the state to redirect to home
                this.setState({
                    redirectTo: true
                }, ()=> console.log(this.state.redirectTo))
            }
        }).catch(error => {
            console.log('login error: ')
            console.log(error);
            
        })
}

componentDidMount() {
  M.AutoInit();
}

render() {
  if (this.state.redirectTo===true) {
      return <Redirect to="/dashboard" />
  }
      return (
            <div className="container">
            <div className="row">
              <form className="col s12" id="signinForm">
                  <div className="row ">
                    <div className="col s12 center formTitle">
                        Welcome Back
                    </div>
                  </div>
                <div className="row">
                <div className="input-field col s12 l6 offset-l3">
                    
                    <input className="validate"
                     type="text"
                     id="username"
                     name="username"
                     value={this.state.username}
                     onChange={this.handleChange}/>
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 l6 offset-l3">
                    <input className="validate"
                     type="password"
                     name="password"
                     value={this.state.password}
                     onChange={this.handleChange}/>
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
                <div className="row">
                      <div className="col s12 l6 offset-l3">
                      <button className="btn waves-effect waves-light" type="submit" name="action"
                      onClick={this.handleSubmit}>Sign In
                          <i className="material-icons right">send</i>
                      </button>
                    </div>
                </div>
                <div className="row">
                  <div className="col s12 l6 offset-l3">
                      Sign up <a href="/signup">here</a>.
                  </div>
                </div>
              </form>
            </div>
           </div>
           
        )
      }
    }
export default LoginForm
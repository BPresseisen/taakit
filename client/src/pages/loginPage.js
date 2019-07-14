import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import "materialize-css/dist/css/materialize.min.css";
import axios from 'axios';


class LoginForm extends Component {
 
  constructor() {
    super()
    this.state = {
        username: '',
        password: '',
        redirectTo: null
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
                this.props.updateUser({
                    loggedIn: true,
                    username: response.data.username
                })
                // update the state to redirect to home
                this.setState({
                    redirectTo: '/'
                })
            }
        }).catch(error => {
            console.log('login error: ')
            console.log(error);
            
        })
}



render() {
  if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
  } else {
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
                     placeholder="Username"
                     value={this.state.username}
                     onChange={this.handleChange}/>
                    <label for="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 l6 offset-l3">
                    <input className="validate"
                     placeholder="password"
                     type="password"
                     name="password"
                     value={this.state.password}
                     onChange={this.handleChange}/>
                    <label for="password">Password</label>
                  </div>
                </div>
                <div className="row">
                      <div className="col s12 l6 offset-l3">
                      <Link to="/role">
                      <button class="btn waves-effect waves-light" type="submit" name="action"
                      onClick={this.handleSubmit}
                      >Sign In
                          <i class="material-icons right">send</i>
                      </button>
                      </Link>
                      </div>
                </div>
           
          
              </form>
            </div>
                      </div>
        )
      }
    }
}
export default LoginForm
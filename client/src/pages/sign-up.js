import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SignUpButton, SignUp } from '../components/Form';
import axios from 'axios'


class Signup extends Component {
  constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',

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
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}
      
    render() {
        return (
            <div className="container">
              <div className="row">
                <form className="col s12" id="signupForm">
                <div className="row ">
                    <div className="col s12 center formTitle">
                      Sign up for Taakit
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
                          >Sign Up
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
export default Signup
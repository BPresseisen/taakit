import React, { Component } from 'react';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
    
import axios from 'axios'


class Signup extends Component {
  constructor() {
		super()
		this.state = {
			username: '',
      password: '',
      role: '',
      firstname: '',
      lastname: '',
      mobile: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      clientID: '',

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
    console.log(this.state.username);
    console.log(this.state.firstname);
    console.log(this.state.lastname);
    console.log(this.state.role);
    console.log(this.state.mobile);
    console.log(this.state.address);
    console.log(this.state.city);
    console.log(this.state.state);
    console.log(this.state.zip);
    console.log(this.state.country);
    console.log(this.state.clientID);
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      role: this.state.role,
      mobile: this.state.mobile,
      address: this.state.address,
      city: this.state.city,
      zip: this.state.password,
      country: this.state.country,
      clientID: this.state.clientID
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}
  componentDidMount() {
    M.AutoInit();
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
                        type="email"
                        id="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}/>
                        <label for="email">Email</label>
                        <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                      </div>
                    </div>
                  <div className="row">
                    <div className="input-field col s12 l6 offset-l3">
                      <input className="validate"
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}/>
                      <label for="password">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 l6 offset-l3">
                    <select multiple>
                      <option value="" disabled selected>Choose your option</option>
                      <option value={this.state.role}>Caregiver</option>
                      <option value={this.state.role}>Professional Aide</option>
                    </select>
                    <label>Role</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 l6 offset-l3">
                      <input className="validate"
                      type="text"
                      name="firstname"
                      value={this.state.firstname}
                      onChange={this.handleChange}/>
                      <label for="firstname">First Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 l6 offset-l3">
                      <input className="validate"
                      type="text"
                      name="lastname"
                      value={this.state.lastname}
                      onChange={this.handleChange}/>
                      <label for="lastname">Last Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 l6 offset-l3">
                      <input className="validate"
                      type="text"
                      name="mobile"
                      value={this.state.mobile}
                      onChange={this.handleChange}/>
                      <label for="mobile">Phone Number</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 l6 offset-l3">
                      <input className="validate"
                       type="text"
                      name="address"
                      value={this.state.address}
                      onChange={this.handleChange}/>
                      <label for="address">Address</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 l6 offset-l3">
                      <input className="validate"
                       type="text"
                      name="city"
                      value={this.state.city}
                      onChange={this.handleChange}/>
                      <label for="city">City</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 l6 offset-l3">
                      <input className="validate"
                      type="text"
                      name="state"
                      value={this.state.state}
                      onChange={this.handleChange}/>
                      <label for="state">State</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 l6 offset-l3">
                      <input className="validate"
                       type="text"
                      name="zip"
                      value={this.state.zip}
                      onChange={this.handleChange}/>
                      <label for="state">Zip</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 l6 offset-l3">
                      <input className="validate"
                      type="text"
                      name="country"
                      value={this.state.country}
                      onChange={this.handleChange}/>
                      <label for="state">Country</label>
                      <input className="validate"
                       type="hidden"
                      name="clientID"
                      value={this.state.clientID}
                      onChange={this.handleChange}/>
                    </div>
                  </div>
                  <div className="row">
                        <div className="col s12 l6 offset-l3">
                          <button class="btn waves-effect waves-light" type="submit" name="action"
                          onClick={this.handleSubmit}>Sign Up
                            <i class="material-icons right">send</i>
                        </button>
                        </div>
                  </div>
                </form>
              </div>
            </div>
        )
    }
}
export default Signup
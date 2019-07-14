import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SignUpButton, SignUp } from '../components/Form';
import axios from 'axios'


class Profile extends Component {
  constructor() {
		super()
		this.state = {
			firstName: '',
			lastName: '',
            fullName: '',
            email: '',
            mobile: '',
            landline: '',
            address1: '',
            address2, '',
            city: '',
            state: '',
            zip: '',
            country: ''

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
		console.log('sign-up handleSubmit, firstName: ')
		console.log(this.state.firstName)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/client/', {
			firstName: this.state.firstName,
            lastName: this.state.lastName,
            fullName: firstName && " " && lastName,
            email: this.state.email,
            mobile: this.state.mobile,
            landline: this.state.landline,
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            country: this.state.country
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful profile generation')
					this.setState({ //redirect to login page
						redirectTo: '/dashboard'
					})
				} else {
					console.log('goonie goo goo')
				}
			}).catch(error => {
				console.log('profile entry error: ')
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
                      Create your Profile for Taakit
                    </div>
                    </div>
                  <div className="row">
                  <div className="input-field col s12 l6 offset-l3">
                      <input className="validate"
                      type="text"
                      id="firsName"
                      name="firstName"
                      placeholder="firstName"
                      value={this.state.userName}
                      onChange={this.handleChange}/>
                      <label htmlFor="firstName">First Name</label>
                    </div>
                  </div>
                  <div className="row">
                  <div className="input-field col s12 l6 offset-l3">
                      <input className="validate"
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="lastName"
                      value={this.state.lastName}
                      onChange={this.handleChange}/>
                      <label htmlFor="lastName">Last Name</label>
                    </div>
                  </div>
                  <div className="row">
                  <div className="input-field col s12 l6 offset-l3">
                      <input className="validate"
                      type="text"
                      id="email"
                      name="email"
                      placeholder="email"
                      value={this.state.email}
                      onChange={this.handleChange}/>
                      <label htmlFor="email">email</label>
                    </div>
                  </div>
                  <div className="row">
                  <div className="input-field col s12 l6 offset-l3">
                      <input className="validate"
                      type="text"
                      id="mobile"
                      name="mobile"
                      placeholder="mobile"
                      value={this.state.mobile}
                      onChange={this.handleChange}/>
                      <label htmlFor="mobile">mobile</label>
                    </div>
                  </div>
                  <div className="row">
                  <div className="input-field col s12 l6 offset-l3">
                      <input className="validate"
                      type="text"
                      id="landline"
                      name="landline"
                      placeholder="landline"
                      value={this.state.landline}
                      onChange={this.handleChange}/>
                      <label htmlFor="landline">landline</label>
                    </div>
                  </div>
                  <div className="row">
                  <div className="input-field col s12 l6 offset-l3">
                      <input className="validate"
                      type="text"
                      id="address1"
                      name="address1"
                      placeholder="address1"
                      value={this.state.address1}
                      onChange={this.handleChange}/>
                      <label htmlFor="address1">Address 1</label>
                    </div>
                  </div>
                  <div className="row">
                  <div className="input-field col s12 l6 offset-l3">
                      <input className="validate"
                      type="text"
                      id="city"
                      name="city"
                      placeholder="city"
                      value={this.state.city}
                      onChange={this.handleChange}/>
                      <label htmlFor="city">City</label>
                    </div>
                  </div>
                  <div className="row">
                  <div className="input-field col s12 l6 offset-l3">
                      <input className="validate"
                      type="state"
                      id="state"
                      name="state"
                      placeholder="state"
                      value={this.state.state}
                      onChange={this.handleChange}/>
                      <label htmlFor="state">State</label>
                    </div>
                  </div>
                  <div className="row">
                  <div className="input-field col s12 l6 offset-l3">
                      <input className="validate"
                      type="text"
                      id="zip"
                      name="zip"
                      placeholder="zip"
                      value={this.state.zip}
                      onChange={this.handleChange}/>
                      <label htmlFor="zip">Zipcode</label>
                    </div>
                  </div>
                  <div className="row">
                  <div className="input-field col s12 l6 offset-l3">
                      <input className="validate"
                      type="text"
                      id="country"
                      name="country"
                      placeholder="country"
                      value={this.state.country}
                      onChange={this.handleChange}/>
                      <label htmlFor="country">Country</label>
                    </div>
                  </div>
                  <div className="row">
                        <div className="col s12 l6 offset-l3">
                          <Link to="/role">
                          <button class="btn waves-effect waves-light" type="submit" name="action"
                          onClick={this.handleSubmit}
                          >Create Profile
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
export default Profile
import React, { Component, Fragment } from 'react'
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import axios from 'axios'


class CreateClient extends Component {
    constructor() {
		super()
		this.state = {
            role: '',
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            country: '',
            userID: ''

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
		console.log('createClient handleSubmit, form capture: ')
        console.log(this.state.firstname);
        console.log(this.state.lastname);
        console.log(this.state.email);
        console.log(this.state.mobile);
        console.log(this.state.address);
        console.log(this.state.city);
        console.log(this.state.state);
        console.log(this.state.zip);
        console.log(this.state.country);
        console.log(this.state.clientID);
		event.preventDefault()

		//request to server to *add a new client to client colleciton
		axios.post('/client', {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            mobile: this.state.mobile,
            address: this.state.address,
            city: this.state.city,
            zip: this.state.zip,
            country: this.state.country,
            clientID: this.state.clientID
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful client add')
					this.setState({ //redirect to login page
						redirectTo: '/dashboard'
					})
				} else {
					console.log('client already in Taakit')
                    //NEED TO ADD VALIDATION FOR CHECKING EXISITNG CLIENTS
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
            <Fragment>
               <div className="container">
                    <div className="row">
                    <form className="col s12 l6 offset-l3" id="signupForm">
                        <div className="row ">
                            <div className="col s12 center formTitle">
                            Create Client
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input className="validate"
                                type="text"
                                name="firstname"
                                value={this.state.firstname}
                                onChange={this.handleChange}/>
                                <label htmlFor="firstname">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input className="validate"
                                type="text"
                                name="lastname"
                                value={this.state.lastname}
                                onChange={this.handleChange}/>
                                <label htmlFor="lastname">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input className="validate"
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}/>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s3">
                                <input className="validate"
                                type="text"
                                name="mobile"
                                value={this.state.mobile}
                                onChange={this.handleChange}/>
                                <label htmlFor="mobile">Mobile Phone</label>
                            </div>
                        
                            <div className="input-field col s6">
                                <input className="validate"
                                type="text"
                                name="address"
                                value={this.state.address}
                                onChange={this.handleChange}/>
                                <label htmlFor="address">Address</label>
                            </div>
                            <div className="input-field col s6">
                                <input className="validate"
                                type="text"
                                name="city"
                                value={this.state.city}
                                onChange={this.handleChange}/>
                                <label htmlFor="city">City</label>
                            </div>
                            <div className="input-field col s4">
                                <input className="validate"
                                type="text"
                                name="state"
                                value={this.state.state}
                                onChange={this.handleChange}/>
                                <label htmlFor="state">State</label>
                            </div>
                            <div className="input-field col s2">
                                <input className="validate"
                                type="text"
                                name="zip"
                                value={this.state.zip}
                                onChange={this.handleChange}/>
                                <label htmlFor="state">Zip</label>
                            </div>
                            <div className="input-field col s2">
                                <input className="validate"
                                type="text"
                                name="country"
                                value={this.state.country}
                                onChange={this.handleChange}/>
                                <label htmlFor="state">Country</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 l6 offset-l3">
                                <button className="btn waves-effect waves-light" type="submit" name="action"
                                onClick={this.handleSubmit}>Sign Up
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default CreateClient;
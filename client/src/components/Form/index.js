import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import "materialize-css/dist/css/materialize.min.css";

export function Input(props) {
    return (
        <div className="row">
            <div className="input-field col s12 l6 offset-l3">
                <input className="validate" {...props} />
                <label htmlFor={props.label}>{props.label}</label>
            </div>
        </div>
     
    );
  }

  export function SignUpButton(props) {
    return (
    <Link to="/role">
        <button className="btn waves-effect waves-light" type="submit" name="action"
        onClick={this.handleSubmit}>Sign Up
        <i className="material-icons right">send</i>
        </button>
    </Link>
    );
  }


export function CreateClientForm(props) {
    return (
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
                     <label htmlFor="mobile">Mobile Number</label>
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
    )
}
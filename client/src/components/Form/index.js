import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

export function Input(props) {
    return (
        <div className="row">
            <div className="input-field col s12 l6 offset-l3">
                <input className="validate" {...props} />
                <label for={props.label}>{props.label}</label>
            </div>
        </div>
     
    );
  }

  export function SignUpButton(props) {
    return (
    <Link to="/role">
        <button class="btn waves-effect waves-light" type="submit" name="action"
        onClick={this.handleSubmit}>Sign Up
        <i class="material-icons right">send</i>
        </button>
    </Link>
    );
  }


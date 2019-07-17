import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import axios from 'axios';
import "./style.css";


class Navbar extends Component {
   

    constructor() {
        super()
        this.state = {
          loggedIn: false,
          username: null
        }
        this.logout = this.logout.bind(this)
    }

    getUser() {
        axios.get('/user/').then(response => {
          console.log('Get user response: ')
          console.log(response.data)
          if (response.data.user) {
            console.log('Get User: There is a user saved in the server session: ')
    
            this.setState({
              loggedIn: true,
              username: response.data.user.username
            })
          } else {
            console.log('Get user: no user');
            this.setState({
              loggedIn: false,
              username: null
            })
          }
        })
      }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)

          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

      componentDidMount() {
        M.AutoInit();
    }

    render() {
        
        return (
        <header>
            <div className="navbar-fixed ">
                <ul id="dropdown1" className="dropdown-content nav-width">
                  <li><a href="#!">&nbsp;</a></li>
                  <li className="divider"></li>
                  <li><a href="/dashboard">My Account</a></li>
                  <li><a href="/!" onClick={this.logout}>Logout</a></li>
                </ul>
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo center">Taakit</a>
                        <a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down ">
                        <li className="nav-width"><a className="dropdown-trigger" href="/!" data-target="dropdown1">My Account<i className="material-icons right">arrow_drop_down</i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>

            <ul className="sidenav red lighten-2" id="slide-out">
                <li> 
                    <a href="/dashboard" className="navText">
                         My Account
                    </a>
                    </li>
                    <li>
                    <a href="/!" className="navText" onClick={this.logout}>Logout</a>
                </li>
            </ul>
        </header>
        );
    }
}

export default Navbar;
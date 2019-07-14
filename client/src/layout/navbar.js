import React, { Component, Fragment } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import axios from 'axios';


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
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        return (
        <header>
            <div className="navbar-fixed ">
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">Taakit</a>
                        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li>  <a href="/">My Account</a></li>
                            <li><a href="/home" onClick={this.logout}>Logout</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

            <ul className="sidenav red lighten-2" id="slide-out">
                <li> 
                    <a href="/" className="navText">
                    My Account
                    </a>
                    </li>
                    <li>
                    <a href="/home!" className="navText" onClick={this.logout}>Logout</a>
                </li>
            </ul>
        </header>
        );
    }
}

export default Navbar;
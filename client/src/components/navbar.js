import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { NavLink } from "react-router-dom";
import axios from 'axios';


class Navbar extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    constructor() {
        super()
        this.logout = this.logout.bind(this)
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

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        return (
            <div className="navbar-fixed ">
                  <nav>
                    <div className="nav-wrapper">
                        <NavLink to="/">
                        <a href="#!" className="brand-logo">Taakit</a>
                        </NavLink>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                    {loggedIn ? (
                        <li>
                        <NavLink to="/signup" onClick={this.logout}>
                            <a href="#!">Logout</a>
                        </NavLink>
                        </li>
                          ) : (
                              <div>
                        <li>
                            <NavLink to="/signin">
                                <a href="#!">Sign-in</a>
                            </NavLink>
                        </li>
                        <li> 
                            <NavLink to="/signup">
                            <a href="#!">Sign-up</a> 
                            </NavLink>
                        </li>
                        <li> 
                            <NavLink to="/profile">
                            <a href="#!">My Account</a>
                            </NavLink>
                        </li>
                        </div>
                         )}
                    </ul>
                    </div>
                </nav>

                <ul className="sidenav red lighten-2" id="mobile-demo">
                <NavLink to="/signin">
                    <li><a href="#!" className="navText">Sign-in</a></li>
                </NavLink>
                <NavLink to="/signup">
                <li><a href="#!"  className="navText">Sign-up</a></li>
                </NavLink>
                <NavLink to="/role"> 
                    <li><a href="#!" className="navText">Role</a></li>
                    </NavLink>
                <NavLink to="/profile"> 
                    <li><a href="#!" className="navText">Profile</a></li>
                    </NavLink>
                    <NavLink to="/patientProfile"> 
                    <li><a href="#!" className="navText">Patient Profile</a></li>
                    </NavLink>
                </ul>
          
            </div>
        );
    }
}

export default Navbar;
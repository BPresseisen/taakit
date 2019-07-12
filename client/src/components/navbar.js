import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { NavLink } from "react-router-dom";
import axios from 'axios';


class Navbar extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
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
            <div className="navbar-fixed">
                  <nav>
                    <div className="nav-wrapper">
                        <NavLink to="/">
                        <a className="brand-logo">Taakit</a>
                        </NavLink>
                    <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                    {loggedIn ? (
                        <li>
                        <NavLink to="/signup" onClick={this.logout}>
                            <a>Logout</a>
                        </NavLink>
                        </li>
                          ) : (
                              <div>
                        <li>
                            <NavLink to="/signin">
                                <a>Sign-in</a>
                            </NavLink>
                        </li>
                        <li> 
                            <NavLink to="/signup">
                            <a>Sign-up</a> 
                            </NavLink>
                        </li>
                        <li> 
                            <NavLink to="/profile">
                            <a >Profile</a>
                            </NavLink>
                        </li>
                        </div>
                         )}
                    </ul>
                    </div>
                </nav>

                <ul className="sidenav red lighten-2" id="mobile-demo">
                <NavLink to="/signin">
                    <li><a className="navText">Sign-in</a></li>
                </NavLink>
                <NavLink to="/signup">
                <li><a  className="navText">Sign-up</a></li>
                </NavLink>
                <NavLink to="/role"> 
                    <li><a className="navText">Role</a></li>
                    </NavLink>
                <NavLink to="/profile"> 
                    <li><a  className="navText">Profile</a></li>
                    </NavLink>
                    <NavLink to="/patientProfile"> 
                    <li><a className="navText">Patient Profile</a></li>
                    </NavLink>
                </ul>
          
            </div>
        );
    }
}

export default Navbar;
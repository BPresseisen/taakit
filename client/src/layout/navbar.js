import React, { Component, Fragment } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { NavLink } from "react-router-dom";
import axios from 'axios';


class Navbar extends Component {
   

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
                    <li> <a href="/userPage">My Account</a></li>
                    <li><a href="/home" onClick={this.logout}>Logout</a></li>
                    </ul>
                    </div>
                </nav>
             </div>

            <ul className="sidenav red lighten-2" id="slide-out">
                <li> <a href="/userPage" className="navText">My Account</a></li>
                <li><a href="/home!" className="navText" onClick={this.logout}>Logout</a></li></ul>
            </header>
        );
    }
}

export default Navbar;
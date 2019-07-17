import React from "react";
import { Link } from 'react-router-dom';

import "materialize-css/dist/css/materialize.min.css";
        
        export function Sidebar() {
            
            return (
            <header>
            <div className="navbar-fixed ">
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">Taakit</a>
                    <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                    <li> <a href="/dashboard">{this.state.username}</a></li>
                    <li><a href="#!" onClick={this.logout}>Logout</a></li>
                    </ul>
                    </div>
                </nav>
             </div>

            <ul className="sidenav red lighten-2" id="slide-out">
                <li> <a href="/dashboard" className="navText">{this.state.username}</a></li>
                <li><a href="#!" className="navText" onClick={this.logout}>Logout</a></li></ul>
            </header>
        );
    }



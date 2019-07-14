import React from "react";
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
                    <li> 
                            <a href="/userPage">My Account</a>
                        </li>
                        <li>
                            <a href="#!" onClick={this.logout}>Logout</a>
                        </li>
                    </ul>
                    </div>
                </nav>
             </div>

            <ul className="sidenav red lighten-2" id="slide-out">
                <li> <a href="/userPage" className="navText">My Account</a></li>
                <li><a href="#!" className="navText" onClick={this.logout}>Logout</a></li></ul>
            </header>
        );
    }



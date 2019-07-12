import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// import Github from '../assets/images/github.png';


class Footer extends Component {
    render() {
        return (
<footer className="page-footer">
            <div className="container">
              <div className="row">
                <div className="col l6 s12">
                  <h5 className="white-text">Taakit</h5>
                  <p className="grey-text text-lighten-4">Taking care of loved ones who need aided care is difficult in and of itself. With TAAKIT those who are tasked with such responsibilities can benefit from a platform that maps and manages everything which needs doing and monitoring.
</p>
                </div>
                <div className="col l4 offset-l2 s12">
                  <h5 className="white-text">Links</h5>
                  <ul>
                  <li>
                      <Link to="/account">
                      <div className="grey-text text-lighten-3">My Account</div>
                      </Link>
                      </li>
                    <li>
                      <Link to="/about">
                      <div className="grey-text text-lighten-3">About</div>
                      </Link>
                      </li>
                    <li>
                    <Link to="/contact">
                      <div className="grey-text text-lighten-3">Contact</div>
                      </Link>
                      </li>
                    <li>
                      <Link to="/team">
                      <div className="grey-text text-lighten-3">Privacy Policy</div>
                      </Link>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container">
              © 2019 Copyright
        
              </div>
            </div>
          </footer>            
              
        )
    }
}
export default Footer
import React from 'react'
import { Link } from 'react-router-dom';
import Github from './github.png';


export function Footer(props) {
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
                  <h5 className="white-text">Site Map</h5>
                  <ul>
                      <li>
                      <Link to="/">
                      <div className="grey-text text-lighten-3">Login</div>
                      </Link>
                      </li>
                      <li>
                      <Link to="/signup">
                      <div className="grey-text text-lighten-3">Signup</div>
                      </Link>
                      </li>
                      <li>
                      <Link to="/dashboard">
                      <div className="grey-text text-lighten-3">Dashboard</div>
                      </Link>
                      </li>
                      <li>
                      <Link to="/tasks">
                      <div className="grey-text text-lighten-3">Tasks</div>
                      </Link>
                      </li>
                      <li>
                      <Link to="/shift">
                      <div className="grey-text text-lighten-3">Shifts</div>
                      </Link>
                      </li>
                    <li>
                    <Link to="/contact">
                      <div className="grey-text text-lighten-3">Contact Us</div>
                      </Link>
                      </li>
                      <li>
                    <Link to="/contact#about">
                      <div className="grey-text text-lighten-3">About</div>
                      </Link>
                      </li>
                      
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container">
              © 2019 Copyright
              <a className="grey-text text-lighten-4 right" href="https://github.com/BPresseisen/test" target="_blank" rel="noopener noreferrer">Github Repo <img src={Github} alt="Github" className="githublogo"/> </a>

              </div>
            </div>
          </footer>  
          );
        }

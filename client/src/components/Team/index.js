import React from 'react';
import "./style.css";
import Ben from './Ben.png';
import Sean from './Sean.png';
import Email from './gmail.png';
import Github from './github-logo.png';
import Linkedin from './linkedin-logo-button.png';


export function SeanM(props) {
    return (
            <div className="col s12 m6 center">
                <div className="profile-img">
                    <img src={Sean} alt={Sean} width="250"/>
                </div>
                <div className="profileInfo center">
                    <h4>Sean Munley</h4>
                    <h5>Full Stack Developer</h5>
                    <h5>Contact:</h5>
                    <br/>
                </div>
                <div className="row">
                   <div className="col s4 right-align icon-img">
                       <a href="mailto:smunley13@gmail.com?subject=WOW!%20We%20are%20impressed&body=We%20want%20to%20hire%20you.%20Here%20is%20our%20offer:" target="_blank" rel="noopener noreferrer">
                       <img  src={Email} alt={Email} width="50"/>
                       </a>
                   </div>
                   <div className="col s4 icon-img">
                  <a href="https://www.linkedin.com/in/sean-munley/" target="_blank" rel="noopener noreferrer">
                  <img src={Linkedin} alt={Linkedin} width="50"/>
                  </a>
                   </div>
                   <div className="col s4 left-align icon-img">
                    <a href="https://github.com/seanmun" target="_blank" rel="noopener noreferrer">
                        <img src={Github} alt={Github} width="50"/>
                    </a>
                   </div>
                </div>
            </div>
   );
}


export function BenP(props) {
    return (
            <div className="col s12 m6 center">
                <div className="profile-img">
                    <img src={Ben} alt={Ben} width="250"/>
                </div>
                <div className="profileInfo center">
                    <h4>Ben Presseisen</h4>
                    <h5>Full Stack Developer</h5>
                    <h5>Contact:</h5>
                    <br/>
                </div>
                <div className="row">
                   <div className="col s4 right-align icon-img">
                       <a href="mailto:benpresseisen@gmail.com?subject=WOW!%20We%20are%20impressed&body=We%20want%20to%20hire%20you.%20Here%20is%20our%20offer:" target="_blank" rel="noopener noreferrer">
                       <img src={Email} alt={Email} width="50"/>
                       </a>
                   </div>
                   <div className="col s4 icon-img">
                  <a href="https://www.linkedin.com/in/benjamin-presseisen-7486445/" target="_blank" rel="noopener noreferrer">
                  <img src={Linkedin} alt={Linkedin} width="50" />
                  </a>
                   </div>
                   <div className="col s4 left-align icon-img">
                    <a href="https://github.com/BPresseisen" target="_blank" rel="noopener noreferrer">
                        <img src={Github} alt={Github} width="50" />
                    </a>
                   </div>
                </div>
            </div>
   );
}
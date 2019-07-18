import React, { Component } from 'react';
import { SeanM, BenP } from '../components/Team';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";


class Contact extends Component {
    componentDidMount() {
        M.AutoInit();
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 center brand-logo">
                        Our Team
                    </div>
                </div>

               <div className="row">
               <BenP/>
                <SeanM/>
               </div>

               <div className="row">
                    <div className="col s12 center brand-logo">
                        Our Story
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 center">
                    We are a dynamic duo fighting for our own loved ones’ ability to live independently and with dignity in their own homes.
                    Our common, shared experiences with the care of senior family members inspired us to create this much needed solution.
                    We collaborate and work together on everything in the platform design, development and deployment. 
                    <br></br>
                    <br></br>
                    We love our work on Taakit because we love the people whose life quality and security have been helped by it.
                    <br></br>And our mission to improve those lives every day means Taakit continually improves to be relied upon by those who need it and matter most.
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 center">
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact
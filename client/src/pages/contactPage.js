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
                    <div className="col s12 center formTitle">
                        Our Team
                    </div>
                </div>

               <div className="row">
               <BenP/>
                <SeanM/>
               </div>

               <div className="row">
                    <div className="col s12 center formTitle">
                        Our Story
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m10 offset-m1 align-left">

                    Welcome to <span className="taakit">Taakit</span>, a solution for the future of in home assisted care. <br/><br/>
                    
                    <b></b>Why we created <span className="taakit">Taakit</span>?
                    <br/><br/>
                     There are approximately 80MM baby boomers (born between 1946 and 1965). As these boomers age, many will require aided care to live their lives as independently as possible and to live with the dignity of remaining in their own home. Taking care of loved ones who need aided care is difficult in and of itself. With <span className="taakit">Taakit</span> those who are tasked with such responsibilities can benefit from a platform that maps and manages everything which needs doing and monitoring.
                     <br/><br/>
                    Loved ones receive the care they need and in real-time these tasks are planned, charted, and communicated as they are delivered.
                    <br/><br/>
                    Real time data in the cloud empowers, enables and educates a multitude of people who may fulfill the caregiving role whether they are an at-home aide, nurse practitioner or from among concerned family and friends. 
                    <br/><br/>
                    The <span className="taakit">Taakit</span> platform is mobile friendly and reduces waste, miscommunications, burdensome duplicate and triplicate paperwork and the manual errors that underlie existing systems, inefficiencies and procedures used by caregivers.
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Contact